import { StyleSheet, Image, View, Pressable } from "react-native";
import { AppText } from "../components/AppText";

export const LoginScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/mechub_banner.png")} />
      <Image
        style={styles.retangle}
        source={require("../assets/retangulo.png")}
      />
      <View style={styles.buttonDiv}>
        <Pressable
          onPress={() => navigation.navigate("SignInScreen")}
          style={[styles.button, { backgroundColor: "#222834" }]}
        >
          <AppText style={[styles.buttonText, , { fontWeight: "bold" }]}>
            Já tenho conta
          </AppText>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("LoginForm")}
          style={[styles.button, { backgroundColor: "#353F54" }]}
        >
          <AppText style={[styles.buttonText, { fontWeight: "bold" }]}>
            Criar conta
          </AppText>
        </Pressable>
      </View>
      <Image
        style={styles.bottomTabImage}
        source={require("../assets/bottom_tab.png")}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242C3B",
    height: "100%",
  },
  retangle: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  buttonDiv: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 64,
    gap: 16,
  },
  button: {
    width: 326,
    height: 49,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#37B6E9",
    fontSize: 15,
  },
  bottomTabImage: {
    position: "absolute",
    bottom: 0,
  },
});
