"use client";

import { useEffect, useState } from "react";

/** Index of the last section whose top has reached the middle of the
 *  viewport. Measured on every scroll rather than observed, so a jump past a
 *  whole section still lands on the right one. `ids` must be stable. */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id));
    const update = () => {
      const middle = window.innerHeight / 2;
      setActive(Math.max(0, sections.findLastIndex((s) => s && s.getBoundingClientRect().top <= middle)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [ids]);

  return active;
}
