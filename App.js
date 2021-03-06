import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "./components/Screen";
import AppButton from "./components/AppButton";

export default function App() {
  console.log("App executed");

  const [timer, setTimer] = useState(null);
  const [bgColor, setBgColor] = useState("#fff");
  const [playing, setPlaying] = useState(false);

  const code_gen = () => {
    let result = "#";
    let code = Math.floor(Math.random() * 16777215).toString(16);
    return result + code;
  };

  const changeColor = () => {
    setBgColor(code_gen());
  };

  const handlePlay = () => {
    if (!playing) {
      setTimer(
        setInterval(() => {
          changeColor();
        }, 500)
      );
      setPlaying(true);
    }
  };

  const handleChange = () => {
    clearInterval(timer);
    changeColor();
  };

  const handleStop = () => {
    clearInterval(timer);
    console.log("clicked");
    setPlaying(false);
  };

  return (
    <Screen style={[styles.container, { backgroundColor: bgColor }]}>
      <AppButton title="Play" color="#5E72E4" onPress={handlePlay} />
      <AppButton
        title="Stop"
        color="#fc5c65"
        onPress={handleStop}
        displaytype={playing ? "flex" : "none"}
      />
      <AppButton title="Change" color="#11CDEF" onPress={handleChange} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    padding: 5
  }
});
