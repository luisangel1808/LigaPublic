import React, { useState } from 'react';
import initialState from '../initialState';
import VideoMini from '../components/VideoMini';
import '../styles/components/Videos.css';

const Videos = () => {
  const [videos, setVideos] = useState(initialState.videos);
  const handleSearch = (value) => {
    let searched = initialState.videos.filter((video) =>
      video.title.toLowerCase().includes(value.toLowerCase())
    );
    setVideos(searched);
  };

    return (
      <section className="Videos">
        <input
          name="search"
          type="text"
          placeholder="¿Qué quieres ver hoy?"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <div className="Videos-container">
          {videos.map((video) => (
            <VideoMini key={video.id} video={video} />
          ))}
        </div>
      </section>
    );
  
};
export default Videos;
