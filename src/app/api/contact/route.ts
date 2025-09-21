import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { ContactFormData, APIResponse } from '@/types';
import { isValidEmail } from '@/lib/utils';

function validateContactData(data: unknown): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];
  const contactData = data as Record<string, unknown>;

  if (!contactData.name || typeof contactData.name !== 'string' || contactData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!contactData.email || typeof contactData.email !== 'string' || !isValidEmail(contactData.email)) {
    errors.push('Valid email address is required');
  }

  if (!contactData.message || typeof contactData.message !== 'string' || contactData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  if (contactData.message && typeof contactData.message === 'string' && contactData.message.length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userRequests = requestCounts.get(ip);

  if (!userRequests || now > userRequests.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userRequests.count >= RATE_LIMIT) {
    return false;
  }

  userRequests.count++;
  return true;
}

export async function POST(req: NextRequest): Promise<NextResponse<APIResponse>> {
  try {
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please try again later.' 
        },
        { status: 429 }
      );
    }

    let body: ContactFormData;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid JSON format' 
        },
        { status: 400 }
      );
    }

    const { isValid, errors } = validateContactData(body);

    if (!isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: errors.join(', ') 
        },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = body;

    if (!process.env.GMAIL_EMAIL || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Server configuration error' 
        },
        { status: 500 }
      );
    }

    let transporter: nodemailer.Transporter;
    try {
      transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_EMAIL,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.verify();
    } catch (error) {
      console.error('Email transporter error:', error);
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service unavailable' 
        },
        { status: 503 }
      );
    }

    const sanitize = (str: string) => str.replace(/[<>]/g, '');
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeSubject = subject ? sanitize(subject) : 'No subject';
    const safeMessage = sanitize(message);

    const mailOptions: nodemailer.SendMailOptions = {
      from: process.env.GMAIL_EMAIL,
      to: process.env.GMAIL_EMAIL,
      replyTo: email,
      subject: `McGill VC Contact: ${safeSubject} - from ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #7c3aed 0%, #a855f7 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">McGill Ventures</h1>
            <p style="color: #e9d5ff; margin: 10px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #7c3aed;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h3>
              <p style="margin: 5px 0;"><strong>Name:</strong> ${safeName}</p>
              <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #7c3aed;">${safeEmail}</a></p>
              <p style="margin: 5px 0;"><strong>Subject:</strong> ${safeSubject}</p>
              <p style="margin: 5px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #7c3aed;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px;">Message</h3>
              <div style="white-space: pre-wrap; line-height: 1.6; color: #4b5563;">${safeMessage}</div>
            </div>
          </div>
          
          <div style="background-color: #f3f4f6; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">
              This email was sent from the McGill Ventures website contact form<br>
              <a href="mailto:${safeEmail}?subject=Re: ${safeSubject}" style="color: #7c3aed;">Click here to reply directly</a>
            </p>
          </div>
        </div>
      `,
      text: `
McGill Ventures - New Contact Form Submission

Contact Information:
Name: ${safeName}
Email: ${safeEmail}
Subject: ${safeSubject}
Submitted: ${new Date().toLocaleString()}

Message:
${safeMessage}

---
Reply to: ${safeEmail}
This email was sent from the McGill Ventures website contact form
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        data: { message: 'Message sent successfully' } 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}