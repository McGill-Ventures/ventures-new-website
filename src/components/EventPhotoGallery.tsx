"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox, { type RenderSlideProps } from "yet-another-react-lightbox";
import { at2x } from "@/lib/photoSizes";

/** The lightbox's own `<img>` would fetch the ~10 MB originals, so slides go through next/image. */
function OptimizedSlide({ slide, rect }: RenderSlideProps) {
  return (
    <div style={{ position: "relative", width: rect.width, height: rect.height }}>
      <Image
        src={slide.src}
        alt={slide.alt ?? ""}
        fill
        loading="eager"
        draggable={false}
        sizes={at2x("100vw")}
        className="object-contain"
      />
    </div>
  );
}

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface EventPhotoGalleryProps {
  photos: Photo[];
  /** Names the trigger for screen readers, e.g. the event title. */
  label: string;
}

/** An invisible button covering its nearest positioned ancestor, so the whole
 *  tile opens the lightbox. */
export default function EventPhotoGallery({ photos, label }: EventPhotoGalleryProps) {
  const [open, setOpen] = useState(false);

  if (photos.length === 0) {
    return null;
  }

  const slides = photos.map((photo) => ({
    src: photo.src,
    alt: photo.alt,
    description: photo.caption,
  }));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View photos from ${label}`}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-purple-300"
      />

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: OptimizedSlide }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.94)" },
        }}
      />
    </>
  );
}
