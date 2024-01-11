import React from 'react';
// Import { Img, staticFile } from 'remotion';
import { useCurrentFrame, useVideoConfig, Video } from 'remotion';
import { AbsoluteFill, staticFile } from "remotion";

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps, width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
    <Video
      src={staticFile("bgvideo.mp4")}
      startFrom={0}
      endAt={durationInFrames}
      style={{
        position: 'absolute',
        zIndex: -1,
        width,
        height,
        objectFit: 'cover', 
      }}
    />
    </AbsoluteFill>
    // <Img
    //   src={staticFile("bgvideo.mp4")}
    //   width={1920}
    //   height={1080}
    //   style={{
    //     position: 'absolute',
    //     zIndex: -1,
    //   }}
    // />
    
  );
};
