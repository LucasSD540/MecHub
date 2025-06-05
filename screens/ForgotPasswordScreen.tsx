import { Image, Pressable, View, StyleSheet, TextInput } from "react-native";
import { AppText } from "../components/AppText";

export const ForgotPassword = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.titlePageText}>
        Enviar e-mail de recuperação de senha
      </AppText>
      <Pressable
        onPress={() => navigation.navigate("SignInScreen")}
        style={styles.buttonDiv}
      >
        <Image source={require("../assets/return_button.png")} />
      </Pressable>
      <View style={styles.inputContainer}>
        <View style={styles.inputDiv}>
          <AppText style={styles.inputName}>E-mail</AppText>
          <TextInput style={styles.input} />
        </View>
      </View>
      <Pressable style={styles.button}>
        <AppText style={styles.buttonText}>Enviar</AppText>
      </Pressable>
      <Image
        style={styles.retangle}
        source={require("../assets/retangulo.png")}
      />
      <Image
        style={styles.bottomTabImage}
        source={require("../assets/bottom_tab.png")}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#242C3B",
  },
  buttonDiv: {
    position: "absolute",
    top: 48,
    left: 16,
  },
  titlePageText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#37B6E9",
    marginTop: 48,
  },
  inputContainer: {
    width: "100%",
    marginTop: 84,
  },
  inputDiv: {
    position: "relative",
    alignItems: "center",
    width: "100%",
    height: 49,
    marginTop: 32,
  },
  inputName: {
    position: "absolute",
    top: -12,
    fontSize: 15,
    fontWeight: "bold",
    color: "#37B6E9",
    zIndex: 10,
  },
  input: {
    width: 326,
    height: 49,
    backgroundColor: "#353F54",
    borderRadius: 10,
    zIndex: 2,
  },
  button: {
    position: "absolute",
    bottom: 112,
    width: 326,
    height: 49,
    borderRadius: 10,
    backgroundColor: "#222834",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  buttonText: {
    color: "#37B6E9",
    fontSize: 15,
    fontWeight: "bold",
  },
  retangle: {
    position: "absolute",
    bottom: 80,
    right: 0,
    zIndex: 1,
  },
  bottomTabImage: {
    position: "absolute",
    bottom: 0,
    zIndex: 2,
  },
});
