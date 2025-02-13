import React, { useEffect, useRef } from "react";
import desktopLoader from "/vid/intro.mp4";
import mobileLoader from "/vid/intro.mp4";

const Loading = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const isMobile = window.innerWidth <= 768;
  return (
    <div>
      <video
        loop
        playsInline
        muted
        autoPlay
        preload="yes"
        ref={videoRef}
        className="fixed z-[-1] left-0 top-0 h-screen w-full object-cover pointer-events-none"
      >
        <source
          src={isMobile ? mobileLoader : desktopLoader}
          type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
    </div>
  );
};

export default Loading;
