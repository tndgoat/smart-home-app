import React, { useState } from "react";
import { Image, ScrollView, Text, View, Switch } from "react-native";

const devices = ["Smart Light", "Smart Fan", "Smart AC", "Smart TV"];

function Widget({ device }) {
  let img_link = require("../../assets/images/smart ac.png");
  if (device.includes("Smart Light")) {
    img_link = require("../../assets/images/smart light.png");
  } else if (device.includes("Smart Fan")) {
    img_link = require("../../assets/images/smart fan.png");
  } else if (device.includes("Smart TV")) {
    img_link = require("../../assets/images/smart tv.png");
  } else {
    img_link = require("../../assets/images/smart ac.png");
  }
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  return (
    <View
      style={{
        width: "100%",
        height: 250,
        backgroundColor: isEnabled1 ? "#659A6E" : "white",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginVertical: 10,
      }}
    >
      <Image
        source={img_link}
        style={{ width: "70%", height: "70%", resizeMode: "contain" }}
      />
      <View
        style={{
          width: 170,
          height: 54,
          marginTop: -10,
          marginLeft: "4%",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: isEnabled1 ? "white" : "black",
            fontFamily: "Poppins-SemiBold",
          }}
        >
          {device}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 14,
              marginTop: 7,
              color: isEnabled1 ? "white" : "black",
              fontFamily: "Poppins-Regular",
            }}
          >
            4 devices
          </Text>
          <View style={{ marginLeft: 50 }}>
            <Switch
              style={{
                transform: [{ scaleX: 0.9 }, { scaleY: 0.8 }, { scale: 0.8 }],
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 15,
              }}
              onValueChange={toggleSwitch1}
              value={isEnabled1}
              trackColor={{ true: "#659A6E", false: null }}
            ></Switch>
          </View>
        </View>
      </View>
    </View>
  );
}
const RoomScreen = ({ navigation, route }) => {
  const { roomName } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: roomName });
  }, [navigation, roomName]);

  return (
    <ScrollView>
      <View
        style={{
          margin: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {devices.map((device, index) => (
          <View key={index}>
            <Widget device={device} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default RoomScreen;
