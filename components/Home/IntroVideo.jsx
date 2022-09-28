// import introVideo from 'public/assets/video/index_vedio.mp4';

const IntroVideo = () => {
  return (
    <div id="video">
      <video
        className="introVideo"
        width="100%"
        height="auto"
        controls="controls"
        autoPlay="autoplay"
        muted="muted"
        loop="loop"
        playsInline=""
      >
        <source src={'/assets/video/index_vedio.mp4'} type="video/mp4" />
      </video>
    </div>
  );
};

export default IntroVideo;
