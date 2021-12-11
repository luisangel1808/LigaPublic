import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/VideoMini.css';
const VideoMini = ({ video }) => {
  return (
    <div className="Miniature">
      <Link to={`video/${video.id}`}>
        <h5>{video.title}</h5>
        <img src={video.image} alt={video.title} />
        <p>{video.description}</p>
      </Link>
    </div>
  );
};
export default VideoMini;
