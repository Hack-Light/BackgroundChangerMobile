import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import COLORS from "../constants/Theme";

export default function AppButton({
  title,
  onPress,
  color,
  displaytype = "flex"
}) {
  return (
    <TouchableOpacity
      style={[styles.buttons, { backgroundColor: color, display: displaytype }]}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginVertical: 10,
    backgroundColor: "#5E72E4",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%"
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
