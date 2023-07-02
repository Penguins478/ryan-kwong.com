import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Music = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Create an AudioListener and add it to the camera
    const listener = new THREE.AudioListener();
    audioRef.current.add(listener);

    // Create a global audio source
    const sound = new THREE.Audio(listener);

    // Load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    audioLoader.load('../../music.mp3', (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.play();
    });

    // Set up the audio analyser
    const analyser = new THREE.AudioAnalyser(sound, 32);

    // Clean up the resources when the component unmounts
    return () => {
      sound.stop();
      audioRef.current.remove(listener);
    };
  }, []);

  return (
    <div>
      <canvas ref={audioRef} />
      {/* Other React and Three.js components */}
    </div>
  );
};

export default Music;
