import React from 'react';
import './App.css';
import videoUrls from './vedioUrl';

function App() {
  return (
    <div className="App">
    {
      videoUrls.map((item)=>(
        <>
        <li>{item.username}</li>
        <video src={item.url} />
        </>
      ))
    }
    </div>
  );
}

export default App;
