import { Image, Pressable, TextInput, View, StyleSheet } from "react-native";
import { AppText } from "../components/AppText";

export const RegisterVehicleScreen = ({ navigation }: any) => {
  return (
    <View style={styles.constainer}>
      <AppText style={styles.titlePageText}>Cadastre seu veículo</AppText>
      <Pressable
        onPress={() => navigation.navigate("HomeScreen")}
        style={styles.buttonDiv}
      >
        <Image source={require("../assets/return_button.png")} />
      </Pressable>
      <View style={styles.inputContainer}>
        <View style={styles.inputDiv}>
          <AppText style={styles.inputName}>Tipo de veículo</AppText>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputDiv}>
          <AppText style={styles.inputName}>Marca</AppText>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputDiv}>
          <AppText style={styles.inputName}>Modelo</AppText>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputDiv}>
          <AppText style={styles.inputName}>Ano</AppText>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputDiv}>
          <AppText style={styles.inputName}>Placa (opcional)</AppText>
          <TextInput style={styles.input} />
        </View>
      </View>
      <Pressable style={styles.button}>
        <AppText style={styles.buttonText}>Cadastrar</AppText>
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
  constainer: {
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
