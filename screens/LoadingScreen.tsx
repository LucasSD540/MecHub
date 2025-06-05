import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>
        <Text style={styles.logoBold}>Mec</Text>
        <Text style={styles.logoLight}>Hub</Text>
      </Text>

      <View style={styles.triangle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C1F2B",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#00CFFF",
  },
  logoBold: {
    color: "#00CFFF",
  },
  logoLight: {
    color: "#6A7FFF",
  },
  triangle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 0,
    borderRightWidth: 300,
    borderBottomWidth: 500,
    borderRightColor: "transparent",
    borderBottomColor: "#00AFFF",
    transform: [{ rotate: "-10deg" }],
  },
});
