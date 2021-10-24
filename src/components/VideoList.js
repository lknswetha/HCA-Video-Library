import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect,handleVideoOnLoad}) => {
    //handleVideoOnLoad={this.handleVideoOnLoad} 
    debugger;
    const renderedVideos =  videos.map((video) => {
        
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} handleVideoOnLoad ={handleVideoOnLoad} />
        console.log(video.id);
    });

    return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};
export default VideoList;