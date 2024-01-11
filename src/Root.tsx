import React from 'react';
import { Composition } from 'remotion';
import { MyComposition } from './Composition';

const Root: React.FC = () => {
  return (
    <Composition
      id="MyComposition"
      component={MyComposition}
      durationInFrames={900} 
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

export default Root;

