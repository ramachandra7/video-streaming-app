import React from 'react'
const VideoCard = ({info}) => {

    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
  return (
    <div className='w-72 p-2 m-2'>
        <img src={thumbnails.medium.url} alt="" className='rounded-lg'/>
        <ul>
            <li className='font-bold m-2'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount+" views"}</li>
        </ul>
    </div>
  )
}

export default VideoCard