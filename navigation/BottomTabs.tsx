import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/car.png")}
              style={{
                width: 20,
                height: 20,
                marginTop: 60,
                tintColor: focused ? "#fff" : "#ccc",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/search.png")}
              style={{
                width: 20,
                height: 20,
                marginTop: 60,
                tintColor: focused ? "#fff" : "#ccc",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/profile.png")}
              style={{
                width: 20,
                height: 20,
                marginTop: 60,
                tintColor: focused ? "#fff" : "#ccc",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
