# Editing the data (for the MVC team)

You no longer touch any files to update programs or partners. Everything is
edited from a password-protected admin page, and changes appear on the live site
immediately.

## Getting in
1. Go to your site address followed by /admin (for example
   yoursite.vercel.app/admin).
2. Enter the team password. This is the ADMIN_PASSWORD value set in the project.
   Ask whoever set up the deployment for it. Anyone with it can edit, so treat it
   like a shared key and change it if it leaks.

## Editing
- Two tabs at the top: Funding programs and Partners.
- Click Edit on any row to change it, or "+ Add new" to create one.
- Everything is a dropdown, a toggle, a date picker, or a tag selector, so you
  cannot enter a value the matcher will not understand.
- Save writes instantly. Founders see the change on their next search. There is
  no redeploy and no waiting.

## Funding programs, the fields that matter most
- **Status** controls whether a program shows and how it ranks. Rolling, Open,
  and Upcoming are live and rank higher. Closed hides it without deleting it.
- **Next deadline** is the key date. Leave it blank for rolling programs. If you
  set a date and it passes, the program hides itself automatically, so a stale
  deadline never reaches a founder. Within 30 days of the date, founders see a
  "closing soon" flag.
- **Link verified** should stay off until you have opened the URL and confirmed
  it is correct and current.
- **Stages** and **Sectors** are how founders get matched. Be accurate, and use
  "All sectors" only for genuinely broad programs.

## Partners, the rules
- Every entry marked **Example placeholder** is fake seed data. Delete all of
  them before founders use the tool. The results page shows a warning while any
  remain.
- **Never** add a real person or company unless they agreed to it. Keep "Show
  contact directly" off unless they consented to direct contact; otherwise MVC
  brokers the introduction and their details stay private.
- **Industries** is the partner's own industry, and it is what a founder's
  customer answer matches against. Tag a clinic as healthcare, not as whatever
  its suppliers sell.
- Set Status to Paused to hide a partner temporarily instead of deleting them.

## The ID field
When you create an entry you set an ID once (lowercase, no spaces, like
acme_clinic). It is permanent and cannot be changed afterward. The name and
everything else can change freely.

## A quarterly habit
Skim every entry, confirm links and willingness, fix tags, and update the Last
reviewed date. The tool is only as trustworthy as what is in here.
