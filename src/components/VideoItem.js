import React from 'react';
import moment from 'moment';
import '../style/video.css';

const VideoItem = ({video , handleVideoSelect,handleVideoOnLoad}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)}  onLoad={() => handleVideoOnLoad(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header '>{video.snippet.title} <br/> Description: { video.snippet.description } <br/> published date :  { moment().format('MMM DD h:mm A',video.snippet.publishTime)}</div>
            </div>
        </div>
    )
};
export default VideoItem;
