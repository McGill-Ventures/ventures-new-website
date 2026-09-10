"use client";

import { motion } from "motion/react";
import { DURATION, EASE, fadeUp, hoverLift, revealOnScroll } from "@/lib/motion";

/**
 * Workshop page for the shared motion tokens. Specimens are spaced a screen
 * apart on purpose: revealOnScroll only proves anything if the element starts
 * outside the viewport, which is why this is a real page and not a canvas.
 */

function Spacer({ label }: { label: string }) {
  return (
    <div className="flex h-[80vh] items-center justify-center">
      <p className="font-heading text-sm tracking-[0.16em] text-purple-950/30 uppercase">
        keep scrolling &darr; {label}
      </p>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-purple-200 bg-white p-8 shadow-sm">
      <p className="font-heading text-lg font-semibold text-purple-950">{children}</p>
    </div>
  );
}

function Specimen({
  name,
  note,
  children,
}: {
  name: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-3xl px-6">
      <h2 className="font-heading text-2xl font-semibold text-purple-950">{name}</h2>
      <p className="mt-1 mb-6 font-body text-purple-950/60">{note}</p>
      {children}
    </section>
  );
}

export default function MotionWorkshop() {
  return (
    <main className="bg-white pb-[60vh]">
      <section className="mx-auto max-w-3xl px-6 pt-16">
        <h1 className="font-display text-4xl text-purple-950">Motion workshop</h1>
        <p className="mt-3 font-body text-purple-950/70">
          Specimens for the tokens in <code>src/lib/motion.ts</code>. Scroll slowly: each
          one should be invisible until it enters the viewport. Toggle the OS reduce-motion
          setting and reload, and every specimen should still fade but never move.
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm text-purple-950/70">
          <dt>EASE</dt>
          <dd>[{EASE.join(", ")}]</dd>
          <dt>DURATION</dt>
          <dd>
            fast {DURATION.fast}s / base {DURATION.base}s / slow {DURATION.slow}s
          </dd>
        </dl>
      </section>

      <Spacer label="fadeUp" />

      <Specimen name="fadeUp" note="opacity 0 to 1, y 24 to 0. The default entrance.">
        <motion.div variants={fadeUp} {...revealOnScroll}>
          <Card>Fades up once, on entering the viewport</Card>
        </motion.div>
      </Specimen>

      <Spacer label="hoverLift" />

      <Specimen name="hoverLift" note="Hover it. Replaces the .hover-lift class on motion components.">
        <motion.div variants={fadeUp} {...revealOnScroll} {...hoverLift} className="cursor-pointer">
          <Card>Hover me</Card>
        </motion.div>
      </Specimen>
    </main>
  );
}
