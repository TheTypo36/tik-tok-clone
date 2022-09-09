import React, { useRef, useState } from "react";
import "../styles/Video.css";

import video from "D:/Arrow/Anand/backup/WhatsApp Video/VID-20190702-WA0026.mp4";
function Video() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //if the video is playing
    //stop it....
    //otherwise if its not playing
    //play it
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video_player"
        ref={videoRef}
        loop
        src={video}
      ></video>
    </div>
  );
}
export default Video;
