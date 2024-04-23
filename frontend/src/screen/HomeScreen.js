import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  return (
    <View className="flex-1  items-center ">
      <LinearGradient
        className="flex-1 w-screen justify-between items-center pb-[15%] pt-[22%]"
        colors={["rgba(52, 168, 83, 0.15)", "rgba(52, 168, 83, 1)"]}

      >
        <Text className="text-[40px] font-bold">Smart Home</Text>
        <Image
          className="w-[90%]"
          style={styles.image}
          source={require("../../assets/bg-image.png")}
        />
        <View className='w-[80%]'>
          <Text className="text-[38px] font-bold">Welcome Home!</Text>
          <Text className="text-[16px] font-medium p-[20px]">
            No matter how far you go, {"\n"}
            home will be your destination to return to. Let's make your home
            comfortable.
          </Text>
        </View>

        <TouchableOpacity
          className="my-[22px] items-center justify-center h-[50px] w-[70%] bg-white rounded-[8px] shadow-lg"
          style={styles.shadow}
          onPress={() => navigation.navigate("Login")}
        >
          <View className="flex flex-row  items-center ">
            <Text className="text-[16px] font-semibold">Get started </Text>
            <Icon name="verticleleft" size={16} type="antdesign" />
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    resizeMode: "contain",
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
export default HomeScreen;
