import { Image, Pressable, View, StyleSheet, ScrollView } from "react-native";
import { AppText } from "../components/AppText";
import { useState } from "react";

export const VehicleDetailScreen = ({ navigation }: any) => {
  const [description, setDescription] = useState(true);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate("HomeScreen")}
        style={{ position: "absolute", left: 24 }}
      >
        <Image source={require("../assets/return_button.png")} />
      </Pressable>
      <AppText
        style={{
          marginTop: 64,
          color: "#fff",
          fontWeight: "bold",
          fontSize: 18,
        }}
      >
        NISSAN - GTR
      </AppText>
      <Image source={require("../assets/gtr.png")} />
      <View
        style={{
          height: "50%",
          width: "100%",
          backgroundColor: "#353F54",
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <View>
          <View
            style={{
              marginTop: 24,
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              gap: 48,
            }}
          >
            <Pressable
              onPress={() => setDescription(true)}
              style={{
                width: 121,
                height: 43,
                backgroundColor: description ? "#28303F" : "#323B4F",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                boxShadow: description
                  ? "0"
                  : "0px 1px 5px 0px rgba(0,0,0,0.25)",
              }}
            >
              <AppText
                style={{
                  color: description ? "rgba(255, 255, 255, 0.6)" : "#3CA4EB",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Descrição
              </AppText>
            </Pressable>
            <Pressable
              onPress={() => setDescription(false)}
              style={{
                width: 121,
                height: 43,
                backgroundColor: description ? "#323B4F" : "#28303F",
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                boxShadow: description ? "#3CA4EB" : "rgba(255, 255, 255, 0.6)",
              }}
            >
              <AppText
                style={{
                  color: description ? "#3CA4EB" : "rgba(255, 255, 255, 0.6)",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Lembrete
              </AppText>
            </Pressable>
          </View>
          {description ? (
            <View>
              <AppText
                style={{
                  textAlign: "center",
                  marginTop: 24,
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                NISSAN - GTR
              </AppText>
              <ScrollView>
                <AppText
                  style={{
                    marginTop: 32,
                    left: 16,
                    color: "#fff",
                  }}
                >
                  O Nissan GT-R é um esportivo japonês lendário, conhecido
                  mundialmente pelo seu desempenho impressionante e pela fama de
                  desafiar supercarros muito mais caros. Ele surgiu
                  originalmente na década de 60, como parte da linha Skyline,
                  mas foi em 2007 que ganhou vida própria como um modelo
                  independente: o GT-R R35. Desde então, ele se tornou um
                  símbolo de força e tecnologia dentro da linha da Nissan.O
                  carro é equipado com um motor V6 3.8 litros biturbo, feito à
                  mão por especialistas conhecidos como Takumi. Ele entrega
                  entre 565 e 600 cavalos de potência, dependendo da versão,
                  sendo a mais extrema a Nismo. A tração é integral e o câmbio é
                  automatizado de dupla embreagem, o que permite que ele vá de 0
                  a 100 km/h em menos de 3 segundos. Ou seja, é um foguete.
                  Apesar de toda essa força bruta, o GT-R também é refinado. Ele
                  tem um sistema eletrônico de tração e suspensão super
                  inteligente, o que ajuda a manter o controle mesmo em curvas
                  em alta velocidade. Isso faz com que ele seja um carro muito
                  mais equilibrado do que só rápido em linha reta. O design é
                  bem agressivo, com linhas musculosas e uma pegada meio
                  futurista, mas sem perder a essência japonesa. Aqui no Brasil,
                  ele é bem raro e caríssimo, passando facilmente de R$ 1
                  milhão, mas ainda assim tem muitos fãs apaixonados,
                  principalmente por causa dos jogos como Gran Turismo e filmes
                  como Velozes e Furiosos.
                </AppText>
              </ScrollView>
            </View>
          ) : (
            <View style={{ alignItems: "center" }}>
              <AppText
                style={{
                  marginTop: 32,
                  marginBottom: 4,
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Lembrete
              </AppText>
              <AppText style={{ color: "#fff", fontSize: 13 }}>
                Troca de óleo: 04/10/2025
              </AppText>
              <AppText style={{ color: "#fff", fontSize: 13 }}>
                Revisão: 05/07/2025
              </AppText>
              <AppText style={{ color: "#fff", fontSize: 13 }}>
                Troca de pneu: 28/06/2025
              </AppText>
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 100,
          flexDirection: "row",
          backgroundColor: "#262E3D",
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#ff0000",
            height: 40,
            width: 150,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText style={{ color: "#fff", fontWeight: "bold" }}>
            Remover
          </AppText>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#4E4AF2",
            height: 40,
            width: 150,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AppText style={{ color: "#fff", fontWeight: "bold" }}>
            Editar
          </AppText>
        </Pressable>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#242C3B",
  },
});
