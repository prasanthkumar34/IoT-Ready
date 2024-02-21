import React, { useCallback } from "react";

// interface InputFileProps {
//   onFileUpload: (file: File) => void;
// }

export const InputAudioFile = ({ onFileUpload }) => {
  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  }, []);

  return (
    <div>
      <label htmlFor="audioFile">Upload Audio File:</label>
      <input
        type="file"
        id="audioFile"
        accept=".mp3"
        onChange={handleFileChange}
      />
    </div>
  );
};
