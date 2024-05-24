import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import LottieView from "lottie-react-native";

import { LinearGradient } from "expo-linear-gradient";

function FireDetectionScreen() {
  return (
    <View style={{ alignItems: "center", backgroundColor: "#F0F5F4" }}>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 24,
          marginTop: "20%",
        }}
      >
        Save your home
      </Text>
      <LottieView
        style={{ width: 300, height: 300 }}
        source={require("../../assets/images/Animated fire.json")}
        autoPlay
        loop
      />
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 22,
          marginTop: "10%",
        }}
      >
        Turn on the fire sprinkler system!
      </Text>
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          fontSize: 22,
          marginTop: "3%",
        }}
      >
        Please click
      </Text>
      <TouchableOpacity style={{ marginTop: "20%" }}>
        <LinearGradient
          style={{ elevation: 1, width: 80, height: 80 }}
          className="flex p-6 rounded-full "
          colors={["#34A853", "#3AAEF8"]}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
        ></LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default FireDetectionScreen;
