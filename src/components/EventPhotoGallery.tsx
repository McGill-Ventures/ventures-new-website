"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

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
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.94)" },
        }}
      />
    </>
  );
}
