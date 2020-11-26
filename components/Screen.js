import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  View
} from "react-native";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1
  }
});
