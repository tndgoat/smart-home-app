import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
// import Image from 'react-native-scalable-image';
import * as LocalAuthentication from "expo-local-authentication";
import { useNavigation } from "@react-navigation/native";
const fingerPrintImage = require("../../assets/Fingering.png");

const LocalAuth = (props) => {
  const [compatible, isCompatible] = useState(false);
  const [fingerPrints, setFingerPrints] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    checkDeviceForHardware();
    checkForFingerprints();
  }, []);

  const checkDeviceForHardware = async () => {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    isCompatible(compatible);
    // console.log('compatible', compatible);
  };

  const checkForFingerprints = async () => {
    let fingerprints = await LocalAuthentication.isEnrolledAsync();
    setFingerPrints(fingerprints);
    // console.log('fingerPrints', fingerprints)
  };

  const scanFingerprint = async () => {
    await LocalAuthentication.authenticateAsync().then((res) => {
      if (res.success === true) {
        navigation.navigate("TabNavigator");
      }
    });
  };

  return (
    <View className="flex space-y-[10px]">
      <Text className="text-center font-light text-[12px]">
        Or sign in with
      </Text>
      <TouchableOpacity
        onPress={() => scanFingerprint()}
        className="flex items-center"
      >
        <Image className=" scale-75" source={fingerPrintImage} />
      </TouchableOpacity>
    </View>
  );
};

export default LocalAuth;

const styles = StyleSheet.create({});
