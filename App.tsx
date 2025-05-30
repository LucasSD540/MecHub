import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { LoginScreen } from "./screens/LoginScreen";
import { LoginForm } from "./screens/LoginForm";
import { SignInScreen } from "./screens/SignInScreen";

const Stack = createStackNavigator();

export default function App() {
  const font = useFonts({
    Poppins: Poppins_400Regular,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginScreen"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignInScreen"
          component={SignInScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginForm"
          component={LoginForm}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
