import React, { useRef, useEffect } from 'react';
import withSection from '../utils/withSection';

const Video = ({
  autoPlay,
  srcMp4,
  srcWeb,
  srcOgv,
  children,
  backgroundImage
}) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.play();
  }, [autoPlay]);

  return (
    <div className="video-container">
      <video
        preload="auto"
        playsInline
        loop
        muted
        ref={ref => (videoRef.current = ref)}
        // style={{
        //   backgroundImage: `url(${backgroundImage})`
        // }}
      >
        <source src={srcMp4} type="video/mp4" />
        <source src={srcWeb} type="video/webm" />
        <source src={srcOgv} type="video/ogg" />
      </video>
      {children && children}
    </div>
  );
};

export default withSection(Video);
