import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OctIcon from "react-native-vector-icons/Octicons";
import HomePageScreen from "./HomePageScreen";

import MyHomeAccountStack from "./MyHomeAccountStack";
import VoiceControl from "./VoiceControl";

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "HomePage") {
            iconName = "home";
          } else if (route.name === "VoiceControl") {
            iconName = "microphone-outline";
          } else {
            iconName = "account-circle-outline";
          }
          //return <Icon name={iconName} color={color} size={25} />;
          return iconName === "home" ? (
            <OctIcon name={iconName} color={color} size={25} />
          ) : (
            <MaterialCommunityIcon name={iconName} color={color} size={30} />
          );
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen
        name="HomePage"
        options={{ headerShown: false }}
        component={HomePageScreen}
      ></Tab.Screen>
      <Tab.Screen
        name="VoiceControl"
        options={{ headerShown: false }}
        component={VoiceControl}
      ></Tab.Screen>
      <Tab.Screen
        name="MyAccount"
        options={{ headerShown: false }}
        component={MyHomeAccountStack}
      ></Tab.Screen>
    </Tab.Navigator>
    // </NavigationContainer>
  );
}

/* Vector */
