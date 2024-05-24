import React, { useState, useEffect } from "react";
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
import LottieView from "lottie-react-native";
// import RNPickerSelect from "react-native-picker-select";
import Voice from '@react-native-voice/voice';
const VoiceControl = ({ }) => {
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);
  const [selectedVoice, setSelectedVoice] = React.useState(
    "Your voice display here"
  );
  const voiceTest = [
    "turn off all the lights",
    "turn off all the televisions",
    "turn off all the fans",
    "turn on all the lights",
    "turn on all the televisions",
    "turn on all the fans",
  ];
  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);
  const toggleSpeechToText = async () => {
    if (!started) {
      await Voice.start("en-NZ");
      setStarted(true);
    }
    else {
      await Voice.stop();
      setStarted(false);
    }
  }
  const onSpeechResults = (result) => {
    console.log(result.value)
    for (let text of result.value) {
      if (voiceTest.includes(text)) {
        setSelectedVoice(text)
        break
      }
    }
  };

  const onSpeechError = (error) => {
    console.log(error);
  };





  const handleVoiceInput = (value) => {
    setSelectedVoice(value);
  };
  return (
    <View className="flex  flex-1  bg-[#F0F5F4] justify-between pt-[20%] pb-[15%] items-center">

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
        <TouchableOpacity
          onPress={toggleSpeechToText}
        >
          <LinearGradient
            style={started ? { elevation: 0 } : { elevation: 2 }}
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
            {/* {!started ? <Button title='Start Speech to Text' onPress={startSpeechToText} /> : undefined}
              {started ? <Button title='Stop Speech to Text' onPress={stopSpeechToText} /> : undefined} */}

            {/* <StatusBar style="auto" /> */}

          </LinearGradient>
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
