import React from 'react';
import ReactPlayer from 'react-player';
import '../styles/components/Video.css';
import initialState from '../initialState';
const Video = (props) => {
  const { id } = props.match.params;
  const video = initialState.videos.filter((video) => video.id == id)[0];
  return (
    <div className="Video">
      <h4>{video.title}</h4>
      <div className="Video-container">
        <ReactPlayer
          url={video.url}
          width="100%"
          height="100%"
          controls
          className="Video-container-player"
        />
      </div>
    </div>
  );
};

export default Video;
