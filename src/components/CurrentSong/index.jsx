// import React, { useEffect, useRef } from "react";

// export const CurrentSong = ({ currentSong }) => {
//   const audioRef = useRef(null);

//   useEffect(() => {
//     if (currentSong && audioRef.current) {
//       const objectURL = URL.createObjectURL(currentSong);
//       audioRef.current.src = objectURL;
//       audioRef.current.play();
//       console.log("playing current song", currentSong);
//     }
//   }, [currentSong]);

//   return (
//     <div>
//       <h2>Now Playing</h2>
//       {currentSong ? (
//         <audio ref={audioRef} controls />
//       ) : (
//         <p>No song selected</p>
//       )}
//     </div>
//   );
// };

import React, { useEffect, useRef } from "react";

export const CurrentSong = ({ currentSong }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = async () => {
      if (currentSong && audioRef.current) {
        try {
          const blob = new Blob([currentSong], { type: currentSong.type });
          const objectURL = URL.createObjectURL(blob);
          audioRef.current.src = objectURL;
          await audioRef.current.play();
          console.log("playing current song", currentSong);
        } catch (error) {
          console.error("Error playing audio:", error);
        }
      }
    };

    playAudio();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, [currentSong]);

  return (
    <div>
      <h2>Now Playing</h2>
      {currentSong ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <audio ref={audioRef} controls />
          <span>{currentSong?.name}</span>
        </div>
      ) : (
        <p>No song selected</p>
      )}
    </div>
  );
};
