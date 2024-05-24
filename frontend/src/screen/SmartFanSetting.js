import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View, } from "react-native";
import LottieView from "lottie-react-native";
// import Slider from "@react-native-community/slider";

import { Icon } from "react-native-elements";

function SmartFanSetting() {
  const [isPressed1, setIsPressed1] = useState(false);
  const [isPressed2, setIsPressed2] = useState(false);
  const [isPressed3, setIsPressed3] = useState(false);
  const [isPressed4, setIsPressed4] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: "#F0F5F4" }}>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            borderRadius: 175,
            width: 250,
            height: 250,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#A1A1A1",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 1,
            shadowRadius: 17,
            backgroundColor: "white",
            borderColor: "#BCBCBC",
            marginTop: 50,
          }}
        >
          <LottieView
            style={{ width: 200, height: 200 }}
            source={require("../../assets/images/Animated fan.json")}
            autoPlay
            loop
          />
        </View>
        <Text
          style={{ fontFamily: "Poppins-Regular", fontSize: 24, marginTop: 50 }}
        >
          Speed
        </Text>
        {/* <Slider
          style={{ width: 300, marginTop: 40 }}
          minimumValue={1}
          maximumValue={10}
          minimumTrackTintColor="#659A6E"
          maximumTrackTintColor="#DFE1E2"
          thumbImage={require("../../assets/images/thumb.png")}
        /> */}
        <Text
          style={{ fontFamily: "Poppins-Regular", fontSize: 24, marginTop: 50 }}
        >
          Timer
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            padding: 10,
          }}
        >
          <TouchableOpacity
            style={{ margin: 3 }}
            onPress={() => setIsPressed1(!isPressed1)}
          >
            <View
              style={{
                backgroundColor: isPressed1 ? "#659A6E" : "white",
                width: 95,
                height: 80,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#C6C6C6",
              }}
            >
              <Text
                style={{
                  color: isPressed1 ? "white" : "black",
                  fontFamily: "Poppins-Regular",
                  fontSize: 20,
                }}
              >
                30 mins
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ margin: 3 }}
            onPress={() => setIsPressed2(!isPressed2)}
          >
            <View
              style={{
                backgroundColor: isPressed2 ? "#659A6E" : "white",
                width: 95,
                height: 80,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#C6C6C6",
              }}
            >
              <Text
                style={{
                  color: isPressed2 ? "white" : "black",
                  fontFamily: "Poppins-Regular",
                  fontSize: 20,
                }}
              >
                1 hour
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ margin: 3 }}
            onPress={() => setIsPressed3(!isPressed3)}
          >
            <View
              style={{
                backgroundColor: isPressed3 ? "#659A6E" : "white",
                width: 95,
                height: 80,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#C6C6C6",
              }}
            >
              <Text
                style={{
                  color: isPressed3 ? "white" : "black",
                  fontFamily: "Poppins-Regular",
                  fontSize: 20,
                }}
              >
                2 hours
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ margin: 3 }}
            onPress={() => setIsPressed4(!isPressed4)}
          >
            <View
              style={{
                backgroundColor: isPressed4 ? "#659A6E" : "white",
                width: 95,
                height: 80,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "#C6C6C6",
              }}
            >
              <Text
                style={{
                  color: isPressed4 ? "white" : "black",
                  fontFamily: "Poppins-Regular",
                  fontSize: 20,
                }}
              >
                3 hours
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="bg-white rounded-full flex p-1"
          style={{ elevation: 2, marginTop: 50 }}
        >
          <Icon
            name="power"
            className=""
            size={30}
            color={"#EA4335"}
            type="material-community"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default SmartFanSetting;
