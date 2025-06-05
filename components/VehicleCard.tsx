import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  ImageSourcePropType,
} from "react-native";
import { AppText } from "./AppText";

type VehicleProps = {
  type: string;
  model: string;
  vehicleImage: ImageSourcePropType;
};

export const VehicleCard = ({ type, model, vehicleImage }: VehicleProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/vehicle_card.png")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      >
        <Image
          style={styles.favoriteIcon}
          source={require("../assets/favorite_icon.png")}
        />
        <Image style={styles.vehicleImage} source={vehicleImage} />
        <AppText style={styles.typeText}>{type}</AppText>
        <AppText style={styles.modelText}>{model}</AppText>
      </ImageBackground>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 240,
    overflow: "hidden",
    zIndex: 10,
  },
  typeText: {
    fontSize: 13,
    color: "#FFFFFF99",
    position: "absolute",
    top: 160,
    left: 16,
  },
  modelText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    position: "absolute",
    top: 180,
    left: 16,
  },
  favoriteIcon: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  vehicleImage: {
    width: 150,
    height: 90,
    position: "absolute",
    top: 70,
    left: 8,
  },
});
