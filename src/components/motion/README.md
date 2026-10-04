# Motion components

Import from `@/components/motion`.
Styles live in `src/app/globals.css` under "Motion primitives".
Every component respects `prefers-reduced-motion`, and hidden states only apply when JS runs.
Phones (up to 767px wide) skip the entrance animations, hold every loop still and get a still starfield, so scrolling stays light.

## `<Reveal>`

Entrance animation, triggered on scroll (`trigger="view"`, default) or on page load (`trigger="load"`).

```tsx
<Reveal variant="up" delay={120}>...</Reveal>
<Reveal as="p" trigger="load" delay={600}>...</Reveal>
<Reveal variant="clip" duration={1300} className="aspect-[4/5]"><Image ... /></Reveal>
```

Variants: `up`, `down`, `left`, `right`, `fade`, `scale`, `blur`, `clip`.
Stagger siblings with `delay={index * 100}`.
Override the travel distance with `style={{ "--reveal-from": "translateY(160px)" }}`.

## `<SplitText>`

Headline whose words rise out of a clipped line one by one.

```tsx
<h1><SplitText text="Building the Future of Venture Capital" trigger="load" /></h1>
<h2><SplitText text="Why Choose McGill Ventures" stagger={90} /></h2>
```

## `<Marquee>`

Infinite CSS scroller in any direction.
Pass enough children to fill the container.
On phones the track holds still, and a horizontal marquee becomes a row you swipe.

```tsx
<Marquee direction="left" duration={75}>{photos}</Marquee>
<Marquee direction="up" fade className="h-full">{photos}</Marquee>
```

## `<Starfield>`

Ambient starfield rendered by tsParticles (`@tsparticles/react` with the slim engine).
Meant to sit behind content inside a `relative` dark section.
Slow drift and twinkle on desktop, paused while off screen.
Phones and reduced motion get the stars drawn once as SVG, and never load tsParticles.

```tsx
<Starfield count={220} className="[mask-image:linear-gradient(to_right,#000_40%,transparent_65%)]" />
```
