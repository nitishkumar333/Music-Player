import React,{useRef, useState} from "react";
import "./style/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/library";
import Nav from "./components/nav";

function App() {

  const setHeight = ()=>{
    const currentHeight = window.innerHeight;
    document.body.style.height = `${currentHeight}px`;
  };
  
  window.addEventListener("resize",setHeight);
  setHeight();
  const [songs,setSongs] = useState(data());
  const [currentSong,setCurrentSong] = useState(songs[0]);
  const [isPlaying,setIsPlaying] = useState(false);
  //refactoring from Player.js
  const audioRef = useRef(null);
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus,setLibraryStatus] = useState(false);
  const timeUpdateHandler= (e)=>{
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo,currentTime:current,duration});
  };
  const songEndHandler = async ()=>{
    let currIdx = songs.findIndex((song)=>song.id===currentSong.id);
    const idx = (currIdx + 1) % songs.length;
    await setCurrentSong(songs[idx]);
    console.log(audioRef.current.pasued);
    setTimeout(function () {
      audioRef.current.play();
    }, 250);
  }
  return (
    <div className={`App ${libraryStatus?"library-active":""}`}>
        <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
        <Song currentSong={currentSong}/>
        <Player audioRef={audioRef} songInfo={songInfo} setSongInfo={setSongInfo} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong} songs={songs} setCurrentSong={setCurrentSong} setSongs={setSongs}/>
        <Library setCurrentSong={setCurrentSong} songs={songs} audioRef={audioRef} isPlaying={isPlaying} setSongs={setSongs} libraryStatus={libraryStatus}/>
        <audio
            onLoadedMetadata={timeUpdateHandler}
            onTimeUpdate={timeUpdateHandler}
            ref={audioRef}
            src={currentSong.audio}
            onEnded={songEndHandler}
            >
        </audio>
    </div>
  );
}

export default App;
