import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "./components/Screen";
import AppButton from "./components/AppButton";

export default function App() {
  console.log("App executed");

  return (
    <Screen style={styles.container}>
      <AppButton title="Play" color="#5E72E4" />
      <AppButton title="Stop" color="#fc5c65" />
      <AppButton title="Change" color="#11CDEF" />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 5
  }
});
