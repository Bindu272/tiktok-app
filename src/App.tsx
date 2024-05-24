import React from 'react';
import './App.css';
import videoUrls from './vedioUrl';
import VideoContainer from './components/VideoContainer';
import TopNavbar from './components/TopNavbar';
import BottomNavbar from './components/BottomNavbar';

function App() {
  return (
    <div className="app">
      <div className='container'>
        <TopNavbar className='top-navbar'/>
    {
      videoUrls.map((video,index)=>(
        <VideoContainer 
          key={index}
          username={video.username}
          description={video.description} url={video.url} autoplay={false} song={video.song} shares={video.shares} likes={video.likes} comments={video.comments} saves={video.saves} profilePic={video.profilePic} setVideoRef={function (ref: HTMLVideoElement | null): void {
           
          } }        
        />
      ))
    }
    <BottomNavbar className='bottom-navbar '/></div>
    </div>
  );
}

export default App;
