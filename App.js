import React, { useState } from "react";
import { View, Button } from "react-native";
import Sound from "react-native-sound";
export const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const togglePlay = () => {
    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
    }
    setIsPlaying(!isPlaying);
  };
  React.useEffect(() => {
//     setSound(new Sound("audio.mp3", Sound.MAIN_BUNDLE, error => {
// console.log('hello')
//     }));
    return () => {
      sound.release();
    };
  }, []);
  return (
    <View >
      <Button title={isPlaying ? "Pause" : "Play"} onPress={togglePlay} />
    </View>
  );
};