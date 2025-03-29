"use client";

import { useEffect, useRef } from "react";

const VideoComponent = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibility = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch((e) => console.error("Video play failed", e));
        } else {
          video.pause();
          video.currentTime = 0; // Resetuj czas, aby unikać glitchy
        }
      });
    };

    const observer = new IntersectionObserver(handleVisibility, {
      root: null,
      threshold: 0.5, // Odtwarzaj, gdy min. 50% filmu jest widoczne
    });

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-screen h-screen object-cover object-center cursor-custom"
      loop
      muted
      playsInline
      preload="auto"
    >
      Twoja przeglądarka nie obsługuje tego wideo.
    </video>
  );
};

export default VideoComponent;