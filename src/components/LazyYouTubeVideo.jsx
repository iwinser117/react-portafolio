import React, { useState } from "react";
import { Play } from "lucide-react";

const getYouTubeId = (url) => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes("youtu.be")) {
      return parsedUrl.pathname.slice(1);
    }

    return parsedUrl.searchParams.get("v") || parsedUrl.pathname.split("/").pop();
  } catch {
    return null;
  }
};

const LazyYouTubeVideo = ({ url, title, playLabel }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getYouTubeId(url);

  if (!videoId) {
    return null;
  }

  if (isPlaying) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsPlaying(true)}
      className="group absolute inset-0 h-full w-full overflow-hidden bg-[#102a43] text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0070d2]"
      aria-label={`${playLabel}: ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/10" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0070d2] text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
          <Play size={24} className="ml-0.5" fill="currentColor" aria-hidden="true" />
        </span>
      </span>
      <span className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">{title}</span>
    </button>
  );
};

export default LazyYouTubeVideo;
