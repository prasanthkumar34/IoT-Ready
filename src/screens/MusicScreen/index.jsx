import React, { useState, useEffect, useCallback } from "react";
import { InputAudioFile } from "../../components/InputFile";
import { PlayList } from "../../components/PlayList";
import { CurrentSong } from "../../components/CurrentSong";
import "./index.css";

const MusicScreen = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    // Load playlist from localStorage on component mount
    const storedPlaylist = localStorage.getItem("playlist");
    // if (storedPlaylist) {
    //   setPlaylist(JSON.parse(storedPlaylist));
    // }

    // Load last playing audio file and continue playing from the last position
    const lastPlayingSong = localStorage.getItem("lastPlayingSong");
    if (lastPlayingSong) {
      setCurrentSong(lastPlayingSong);
    }
  }, []);

  const handleFileUpload = useCallback((file) => {
    // Add the file to the playlist
    setPlaylist((prevPlaylist) => [...prevPlaylist, file]);
  }, []);

  useEffect(() => {
    // Store updated playlist in localStorage
    console.log("use effect playlist", playlist);
    if (playlist.length) {
      localStorage.setItem("playlist", JSON.stringify(playlist));
    }
  }, [playlist]);

  const handleSongChange = useCallback((song) => {
    // Update current playing song
    setCurrentSong(song);
    // Store current playing song in localStorage
    localStorage.setItem("lastPlayingSong", song);
  }, []);

  return (
    <div className="music-screen">
      <InputAudioFile onFileUpload={handleFileUpload} />
      <PlayList playlist={playlist} onSongChange={handleSongChange} />
      <CurrentSong currentSong={currentSong} />
    </div>
  );
};

export default MusicScreen;
