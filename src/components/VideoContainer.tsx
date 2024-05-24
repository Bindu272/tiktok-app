import React, { useEffect, useRef, RefObject } from 'react'
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import '../styles/videoContainer.css'
import { VideoContainerProps } from '../types/videoTypes';
const VideoContainer:React.FC<VideoContainerProps>=(props) => {
    const {url, autoplay,setVideoRef, description, song, username, comments, shares, profilePic,likes, saves}=props
    const videoRef:RefObject<HTMLVideoElement>=useRef<HTMLVideoElement>(null)

    useEffect(()=>{
        if(autoplay && videoRef.current){
            videoRef.current.play()
        }
    },[autoplay])

    const handleVideoClick=()=>{
        if(videoRef.current){
            if(videoRef.current.paused){
                videoRef.current.play()
            }else{
                videoRef.current.pause()
            }
            setVideoRef(videoRef.current)
        }
    }
  return (
    <div className='video'>
        <video className='player' onClick={handleVideoClick}
      ref={videoRef}
        loop
        // muted
        src={url}/>
        <div className='bottom-controls'>
            <div className='footer-left'>
                <FooterLeft username={username} description={description} song={song}/>
            </div>
            <div className='footer-right'>
                <FooterRight likes={likes} shares={shares} comments={comments} saves={saves} profilePic={profilePic}/>
            </div>
        </div>
      
    </div>
  )
}

export default VideoContainer
