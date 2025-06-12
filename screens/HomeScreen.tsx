import { Image, View, StyleSheet, ScrollView, Pressable } from "react-native";
import { AppText } from "../components/AppText";
import { VehicleCard } from "../components/VehicleCard";
import { FavoriteCard } from "../components/FavoriteCard";

export const HomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate("RegisterVehicleScreen")}>
          <AppText style={styles.pageTitle}>VEÍCULOS</AppText>
        </Pressable>
        <View style={styles.cardContainer}>
          <Pressable onPress={() => navigation.navigate("VehicleDetailScreen")}>
            <FavoriteCard
              type="Carro"
              model="NISSAN - GTR"
              vehicleImage={require("../assets/gtr.png")}
            />
          </Pressable>
          <VehicleCard
            type="Carro"
            model="FIAT - TORO"
            vehicleImage={require("../assets/car_image.png")}
          />
          <VehicleCard
            type="Moto"
            model="YAMAHA - MT 03"
            vehicleImage={require("../assets/mt03.png")}
          />
          <VehicleCard
            type="Moto"
            model="HONDA - ADV"
            vehicleImage={require("../assets/adv.png")}
          />
          <VehicleCard
            type="Moto"
            model="HONDA - TWISTER"
            vehicleImage={require("../assets/mt03.png")}
          />
          <VehicleCard
            type="Carro"
            model="NISSAN - FRONTIER"
            vehicleImage={require("../assets/frontier.png")}
          />
          <VehicleCard
            type="Moto"
            model="NISSAN - KICKS"
            vehicleImage={require("../assets/kicks.png")}
          />
        </View>
        <Image
          style={styles.retangle}
          source={require("../assets/retangulo.png")}
        />
        <Image
          style={styles.bottomTabImage}
          source={require("../assets/bottom_tab.png")}
        />
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#242C3B",
  },
  pageTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 32,
  },
  cardContainer: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: 32,
  },
  retangle: {
    position: "static",
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
