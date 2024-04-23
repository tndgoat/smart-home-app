import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from "react-native";
import { Icon } from 'react-native-elements';

const devices = ["Smart Light", "Smart Fan", "Smart TV", "Fire Detection"];

function Widget({ device, navigation }) {
  let img_link = require("../../assets/images/fire.png");
  if (device.includes("Smart Light")) {
    img_link = require("../../assets/images/smart light.png");
  } else if (device.includes("Smart Fan")) {
    img_link = require("../../assets/images/smart fan.png");
  } else if (device.includes("Smart TV")) {
    img_link = require("../../assets/images/smart tv.png");
  } else {
    img_link = require("../../assets/images/fire.png");
  }
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const screenMapping = {
    "Smart Light": "SmartLight",
    "Smart Fan": "SmartFan",
    "Smart TV": "SmartTV",
    "Fire Detection": "FireDetection",
  };

  const targetScreen = screenMapping[device];

  return (
    <TouchableHighlight className='w-[47%] rounded-3xl mt-[3%]'
      onPress={() => {
        navigation.navigate(targetScreen);
      }}>

      <View className='flex items-center px-3 py-2 h-[250px] justify-center border border-[0.1px] border-[#808080] rounded-3xl'
        style={[
          { backgroundColor: isEnabled1 ? "#659A6E" : "white" }, { elevation: 1 }]}>
        <Image
          source={img_link}
          style={{ width: "60%", height: "60%", resizeMode: "contain" }}
        />

        <View className='flex  items-left justify-center'>
          <Text
            style={{
              fontSize: 20,
              color: isEnabled1 ? "white" : "black",
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {device}
          </Text>
          <View className='flex flex-row justify-between w-full items-center'>
            {device != "Fire Detection" ? (
              <Text
                style={{
                  fontSize: 14,
                  color: isEnabled1 ? "white" : "black",
                  fontFamily: "Poppins-Regular",
                }}
              >
                4 devices
              </Text>
            ) : (
              <View></View>
            )}
            <View >
              <Switch
                onValueChange={toggleSwitch1}
                value={isEnabled1}
                trackColor={{ false: '#D9D9D9', true: '#FFF' }}
                thumbColor={isEnabled1 ? '#659A6E' : '#f4f3f4'}

              ></Switch>
            </View>

          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
////////////////////////////////////////////////////////////////////  
export default function HomePageScreen({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View className='bg-[#F0F5F4] w-screen h-full min-h-screen flex space-y-3 justify-start items-center pt-[12%] pb-[10%]' >
        {/* Weather Sensor */}
        <View className='flex w-full space-y-2  h-[30%]'>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 22,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Hi, Tung Nguyen
          </Text>

          {/* Board */}
          <View className=' w-fit min-w-[90%] max-w-[95%] flex flex-row items-center justify-between px-2 bg-[#D8E4E8] self-center rounded-lg border border-[5px] border-white '>
            {/* Board 1 */}
            <View className='flex flex-row items-center justify-center space-x-2 '>
              <Image className='w-[75px] h-[75px]'
                source={require("../../assets/images/cloud.png")}
              />
              <View className='flex  max-w-[58%]'>
                <Text style={{ fontFamily: "Poppins-Regular" }}>
                  April 14, 2024
                </Text>
                <Text style={{ fontFamily: "Poppins-SemiBold" }}>Cloudy</Text>
                <Text style={{ fontFamily: "Poppins-Regular" }}>
                  TP.HCM, Vietnam
                </Text>
              </View>
            </View>
            <Icon name='minus' className='mx-[-40px]' style={{ transform: [{ rotate: '90deg' }, { scaleY: .1 }] }} color={'#4C7380'} size={99} type='material-community' />
            <View className='flex items-center space-y-[4px] py-2'>
              {/* Board 2 */}
              <View className='bg-[#F0F5F4] w-[100%] py-1 px-2 flex justify-center items-center rounded-md'>
                <View className='flex flex-row items-center space-x-1' >
                  <Image
                    source={require("../../assets/images/drop of water.png")}
                    style={{ width: 30, height: 30 }}
                  />
                  <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", }}>
                    60 %
                  </Text>
                </View>
                <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular", }}>
                  Humidity
                </Text>
              </View>
              {/* Board 3 */}
              <View className='bg-[#F0F5F4] py-1 px-2 flex justify-center items-center rounded-md'>
                <View className='flex flex-row items-center space-x-1' >
                  <Image
                    source={require("../../assets/images/temperature.png")}
                    style={{ width: 30, height: 30 }} />
                  <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", }}>
                    36
                  </Text>
                  <Icon name='temperature-celsius' size={24} type='material-community' />
                </View>
                <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular", }}>
                  Temperature
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Widgets */}
        <View
          className='flex flex-row items-center flex-wrap w-screen px-[5%]  justify-between'
        >
          {devices.map((device, index) => (
            <Widget key={index} device={device} navigation={navigation} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  widgetContent: {
    width: "100%",
    height: 250,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginVertical: 10,
    margin: 5,
  },
  container: {
    flexDirection: "column",
    // height: 800,
    flex: 1,
    paddingTop: 60,
    padding: 15,
  },
  boardContainer: {
    backgroundColor: "#D8E4E8",
    marginTop: 5,
    flex: 1,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: "white",
    flexDirection: "row",
  },
  board1Container: {
    marginTop: 42,
    marginLeft: 18,
    width: 232,
    height: 100,
    flexDirection: "row",
  },
  weatherInfo: {
    flexDirection: "column",
    width: 125,
    height: 80,
    marginLeft: 10,
    marginTop: 10,
    flex: 1,
  },
  board23Container: {
    marginLeft: 10,
    flexDirection: "column",
    width: "30%",
    height: 150,
    marginLeft: -3,
    marginTop: 10,
  },
  board2Container: {
    backgroundColor: "#F0F5F4",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 8,
  },
  board3Container: {
    backgroundColor: "#F0F5F4",
    flex: 1,
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
});
