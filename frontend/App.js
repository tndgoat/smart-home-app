import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screen/HomeScreen.js";
import Login from "./src/screen/Login.js";
import SignUp from "./src/screen/SignUp.js";
import SmartLightControl from "./src/screen/SmartLightControl.js";
import SmartLightSetting from "./src/screen/SmartLightSetting.js";

import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

import TabNavigator from "./src/screen/TabNavigator.js";
import SmartTVControl from "./src/screen/SmartTVControl.js";
import SmartTVSetting from "./src/screen/SmartTVSetting.js";
import FireDetectionScreen from "./src/screen/FireDetectionScreen.js";
import SmartFanControl from "./src/screen/SmartFanControl.js";
import SmartFanSetting from "./src/screen/SmartFanSetting.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabNavigator"
          component={TabNavigator}
        />
        <Stack.Screen
          options={{
            title: "Smart Light",
            // headerTransparent: true,
            headerBackTitleVisible: false,
            headerTintColor: "black",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="SmartLight"
          component={SmartLightControl}
        />
        <Stack.Screen
          options={{
            title: "Light Setting",
            // headerTransparent: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="LightSetting"
          component={SmartLightSetting}
        />
        <Stack.Screen
          options={{
            title: "Smart TV",
            // headerTransparent: true,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="SmartTV"
          component={SmartTVControl}
        />

        <Stack.Screen
          options={{
            title: "Smart TV Setting",
            // headerTransparent: true,

            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="SmartTVSetting"
          component={SmartTVSetting}
        />

        <Stack.Screen
          options={{
            title: "Smart Fan",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="SmartFan"
          component={SmartFanControl}
        />

        <Stack.Screen
          options={{
            title: "Smart TV Setting",
            // headerTransparent: true,

            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="SmartFanSetting"
          component={SmartFanSetting}
        />

        <Stack.Screen
          options={{
            title: "Fire Detection",
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: "#F0F5F4",
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="FireDetection"
          component={FireDetectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
