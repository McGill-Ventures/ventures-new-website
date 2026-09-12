# Motion components

Import from `@/components/motion`.
Styles live in `src/app/globals.css` under "Motion primitives".
Every component respects `prefers-reduced-motion`, and hidden states only apply when JS runs.

## `<Reveal>`

Entrance animation, triggered on scroll (`trigger="view"`, default) or on page load (`trigger="load"`).

```tsx
<Reveal variant="up" delay={120}>...</Reveal>
<Reveal as="p" trigger="load" delay={600}>...</Reveal>
<Reveal variant="clip" duration={1300}><Image ... /></Reveal>
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

## `<CountUp>`

Counts to the number inside any string once in view: `"2.6K+"`, `"$40M"`, `"2nd"`.

```tsx
<CountUp value="2.6K+" delay={200} />
```

## `<Marquee>`

Infinite CSS scroller in any direction.
Pass enough children to fill the container.

```tsx
<Marquee direction="left" duration={75}>{photos}</Marquee>
<Marquee direction="up" fade className="h-full">{photos}</Marquee>
```

## `<Parallax>`

Shifts children vertically with scroll.
Positive `speed` lags behind the page, negative runs ahead.

```tsx
<Parallax speed={0.1}><Image ... /></Parallax>
```

## `<MouseParallax>` and `<ParallaxLayer>`

The wrapper tracks the pointer, each layer drifts by its `depth`.

```tsx
<MouseParallax strength={18}>
  <ParallaxLayer depth={1.4}>...</ParallaxLayer>
  <ParallaxLayer depth={0.6}>...</ParallaxLayer>
</MouseParallax>
```
