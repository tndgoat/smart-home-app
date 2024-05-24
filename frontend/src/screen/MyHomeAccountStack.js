import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyHomeScreen from "./MyHomeScreen";
import MyAccountScreen from "./MyAccountScreen";
import { View } from "react-native";
import RoomScreen from "./RoomScreen";
import PowerUsageScreen from "./PowerUsageScreen";

const Stack = createNativeStackNavigator();

const MyHomeAccountStack = () => {
  return (
    <NavigationContainer independent={true}>
      {/*từ MyAccountScreen chuyển sang nhiều screen khác nữa */}
      <Stack.Navigator>
        <Stack.Screen
          name="MyAccount"
          component={MyAccountScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="My Home"
          component={MyHomeScreen}
          options={{
            headerBackground: () => (
              <View style={{ flex: 1, backgroundColor: "#F0F5F4" }} />
            ),
            headerBackTitleVisible: false,
            headerTintColor: "black",
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
              fontSize: "24",
            },
          }}
        />
        <Stack.Screen
          name="Power Usage"
          component={PowerUsageScreen}
          options={{
            headerBackground: () => (
              <View style={{ flex: 1, backgroundColor: "#F0F5F4" }} />
            ),
            headerBackTitleVisible: false,
            headerTintColor: "black",
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
              fontSize: "24",
            },
          }}
        />
        {/* từ MyHome chuyển qua Room */}
        <Stack.Screen
          name="Room"
          component={RoomScreen}
          options={{
            headerBackground: () => (
              <View style={{ flex: 1, backgroundColor: "#F0F5F4" }} />
            ),
            headerBackTitleVisible: false,
            headerTintColor: "black",
            headerTitleStyle: {
              fontFamily: "Poppins-SemiBold",
              fontSize: "24",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyHomeAccountStack;
