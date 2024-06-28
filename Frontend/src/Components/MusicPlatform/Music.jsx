import { useRef, useState } from 'react';
import './Music.css';
import Navbar from '../Navbar';

function Music() {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Kpop_Playlist',
    songArtist: 'Kpop',
    songSrc: '/Assets/songs/Kpop_Playlist.mp3',
    songAvatar: '/Assets/Images/image1.jpg'
  });

  // UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('00 : 00');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = (e.target.value * currentAudio.current.duration) / 100;
  };

  // Change Avatar Class
  const avatarClass = ['objectFitCover', 'objectFitContain', 'none'];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  const handleAvatar = () => {
    setAvatarClassIndex((prevIndex) => (prevIndex >= avatarClass.length - 1 ? 0 : prevIndex + 1));
  };

  // Play Audio Function
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  const musicAPI = [
    {
      songName: 'Kpop_Playlist',
      songArtist: 'Kpop',
      songSrc: '/Assets/songs/Kpop_Playlist.mp3',
      songAvatar: '/Assets/Images/image1.jpg'
    },
    {
      songName: 'Study_Playlist',
      songArtist: 'Aurora Aksnes',
      songSrc: '/Assets/songs/Study_Playlist.mp3',
      songAvatar: '/Assets/Images/image2.jpg'
    },
    {
      songName: 'Productivity_Playlist',
      songArtist: 'TEGNENT',
      songSrc: '/Assets/songs/Productivity_Playlist.mp3',
      songAvatar: '/Assets/Images/image3.jpeg'
    }
  ];

  const handleNextSong = () => {
    const nextIndex = musicIndex >= musicAPI.length - 1 ? 0 : musicIndex + 1;
    setMusicIndex(nextIndex);
    updateCurrentMusicDetails(nextIndex);
  };

  const handlePrevSong = () => {
    const prevIndex = musicIndex === 0 ? musicAPI.length - 1 : musicIndex - 1;
    setMusicIndex(prevIndex);
    updateCurrentMusicDetails(prevIndex);
  };

  const updateCurrentMusicDetails = (index) => {
    const musicObject = musicAPI[index];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.pause();
    setCurrentMusicDetails(musicObject);
    setIsAudioPlaying(false);
    setAudioProgress(0);
    setMusicCurrentTime('00 : 00');
  };

  const handleAudioUpdate = () => {
    if (currentAudio.current.duration) {
      // Input Music Current Time
      const currentMin = Math.floor(currentAudio.current.currentTime / 60);
      const currentSec = Math.floor(currentAudio.current.currentTime % 60);
      const musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
      setMusicCurrentTime(musicCurrentT);

      const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100, 10);
      setAudioProgress(isNaN(progress) ? 0 : progress);
    }
  };

  const handleLoadedMetadata = () => {
    if (currentAudio.current.duration) {
      // Input total length of the audio
      const minutes = Math.floor(currentAudio.current.duration / 60);
      const seconds = Math.floor(currentAudio.current.duration % 60);
      const musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
      setMusicTotalLength(musicTotalLength0);
    }
  };

  return (
    <>
    <Navbar/>
      <div className="music_container">
        <audio
          src={currentMusicDetails.songSrc}
          ref={currentAudio}
          onEnded={handleNextSong}
          onTimeUpdate={handleAudioUpdate}
          onLoadedMetadata={handleLoadedMetadata}
        ></audio>
        <div className="blackScreen"></div>
        <div className="music-Container">
          <p className='musicPlayer'>Music Player</p>
          <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
          <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
          <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar' />
          <div className="musicTimerDiv">
            <p className='musicCurrentTime'>{musicCurrentTime}</p>
            <p className='musicTotalLength'>{musicTotalLength}</p>
          </div>
          <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
          <div className="musicControlers">
            <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
            <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
            <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Music;
