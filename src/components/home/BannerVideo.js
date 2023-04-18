import React from 'react';

const BannerVideo = () => {
  return (
    <div >
      <video style={{width:"100%"}} autoPlay loop muted >
  <source src="assets\images\backgrounds\bannervideo.mp4" type="video/mp4"/>

</video>
    </div>
  );
};

export default BannerVideo;
