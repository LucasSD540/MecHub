import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

export default function CustomTabBar(props: any) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/bottom_tab.png")}
        style={styles.background}
        resizeMode="stretch"
      >
        <BottomTabBar {...props} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
  },
  background: {
    flex: 1,
  },
});
