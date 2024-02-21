import React, { useEffect } from "react";

export const PlayList = ({ playlist, onSongChange }) => {
  useEffect(() => {
    console.log("playlist", playlist);
  }, [playlist]);
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((song, index) => (
          <li
            style={{ listStyle: "none" }}
            key={index}
            onClick={() => onSongChange(song)}
          >
            <button style={{ width: "100%" }}>{song.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
