"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Camera } from "lucide-react";

interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

interface EventPhotoGalleryProps {
  eventId: string;
  photos: Photo[];
  buttonText?: string;
}

export default function EventPhotoGallery({
  eventId: _eventId,
  photos,
  buttonText = "View Photos",
}: EventPhotoGalleryProps) {
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
        onClick={() => setOpen(true)}
        className="group/btn self-start inline-flex items-center gap-2 border-2 border-purple-600 text-purple-700 px-5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-all duration-300 ease-in-out hover:bg-[#7C3AED] hover:border-[#7C3AED] hover:text-white"
      >
        <Camera className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
        {buttonText}
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(61, 21, 81, 0.96)" },
        }}
      />
    </>
  );
}
