import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Shadow } from "react-native-shadow-2";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LightItem from "../component/DeviceItem";
import RadioButton from "../component/RadioButton";
import { SelectList } from "react-native-dropdown-select-list";
import LottieView from "lottie-react-native";
import RNPickerSelect from "react-native-picker-select";
const VoiceControl = ({ }) => {
  // const [modalVisible, setModalVisible] = useState(false);
  // const [selectedValue, setSelectedValue] = useState('option1');
  const [selectedVoice, setSelectedVoice] = React.useState(
    "Your voice display here"
  );

  // const [option, setOption] = useState(null);

  const voiceTest = [
    {
      id: 1,
      label: "Turn off all the lights",
      value: "Turn off all the lights",
    },
    {
      id: 2,
      label: "Turn off all the televisions",
      value: "Turn off all the televisions",
    },
    {
      id: 3,
      label: "Turn off all the fans",
      value: "Turn off all the fans",
    },
    {
      id: 4,
      label: "Turn on all the lights",
      value: "Turn on all the lights",
    },
    {
      id: 5,
      label: "Turn on all the televisions",
      value: "Turn on all the televisions",
    },
    {
      id: 6,
      label: "Turn on all the fans",
      value: "Turn on all the fans",
    },
  ];

  const handleVoiceInput = (value) => {
    setSelectedVoice(value);
  };
  return (
    <View className="flex  flex-1  bg-[#F0F5F4] justify-between pt-[20%] pb-[15%] items-center">
      {/* <View className="flex flex-row space-x-2">
        <TouchableOpacity className="border border-1 border-[#07DE2B] rounded-2xl py-2 px-3">
          <Text className="text-[12px] font-light">
            Turn off all the lights
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="border border-1 border-[#07DE2B] rounded-2xl py-2 px-3">
          <Text className="text-[12px] font-light">
            Turn on the fan in the living room
          </Text>
        </TouchableOpacity>
      </View> */}
      <View>
        <Text className="text-[24px] font-regular">Say Something</Text>
      </View>
      <View className="flex ">
        <LottieView
          className="w-[300px] h-[300px] "
          source={require("../../assets/Animation-Voice.json")}
          autoPlay
          loop
        />
      </View>
      <View className="pb-4">
        <Text className="font-light text-[14px]">{selectedVoice}</Text>
      </View>

      <View className="flex flex-row justify-center items-center space-x-10">
        <TouchableOpacity className="rounded-full p-2 border border-1 border-[#5A5E75]/[.5]">
          <RNPickerSelect
            className=""
            onValueChange={(value) => handleVoiceInput(value)}
            items={voiceTest}
          >
            <Icon
              name="message-text-outline"
              size={30}
              type="material-community"
            />
          </RNPickerSelect>
        </TouchableOpacity>
        <TouchableOpacity>
          <LinearGradient
            style={{ elevation: 1 }}
            className="flex p-6 rounded-full"
            colors={["#34A853", "#3AAEF8"]}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Icon
              name="microphone-outline"
              size={40}
              color={"white"}
              type="material-community"
            />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full p-2 border border-1 border-[#5A5E75]/[.5]">
          <Icon name="replay" size={30} type="material-community" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
  shadow: {
    shadowColor: "#000",
    elevation: 2,
  },
});
export default VoiceControl;
