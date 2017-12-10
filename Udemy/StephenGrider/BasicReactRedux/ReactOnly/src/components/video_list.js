import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = ({ videos, handleVideoClick }) => {

  const videoListMap = videos.map((video) => {
    return <VideoListItem handleVideoClick={handleVideoClick} key={video.etag} video={video} />
  });

  return (
    <ul className="col-md-4 list-group" >
      {videoListMap}
    </ul>
  );
};

export default VideoList;