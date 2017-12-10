import React from 'react';

const VideoListItem = ({ video, handleVideoClick }) => {
  console.log(video);
  const imgUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <li onClick={() => handleVideoClick(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left video-item">
          <img src={imgUrl} alt="" className="media-object"/>
        </div>

        <div className="media-body">
          <div className="media-heading">{videoTitle}</div>
        </div>

      </div>
    </li>
  );
};

export default VideoListItem;