import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SelectList } from "react-native-dropdown-select-list";
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
  Switch,
} from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const DeviceItem = (props) => {
  const rooms = [
    { key: "1", value: "Living Room" },
    { key: "2", value: "Study Room" },
    { key: "3", value: "Bedroom" },
    { key: "4", value: "Kitchen" },
    { key: "5", value: "Toilet" },
    { key: "6", value: "Bedroom 2" },
  ];
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = React.useState("");

  const [isEnabled, setIsEnabled] = useState(props.status == 1);
  //const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch = async () => {
    const currentState = isEnabled;
    setIsEnabled(!currentState);

    const url =
      "http://thingsboard.cloud/api/v1/8nx36nkj1djnq57qdu9k/attributes";

    const requestBody = {
      [`room${props.id}_${props.type}1`]: !currentState,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        console.error("Failed to toggle switch, status code:", response.status);

        setIsEnabled(currentState);
        return;
      }
    } catch (error) {
      console.error("Error: ", error);
      setIsEnabled(currentState);
    }
  };
  const handleSubmit = () => {
    setModalVisible(!modalVisible);
  };
  // if (props.type === 'light' )
  return (
    <View
      style={styles.shadow}
      className="flex my-1 bg-[#D8E4E8] w-[280px] h-fit space-y-[5px] justify-center py-2 px-4 rounded-[16px] items-center "
    >
      <View className="flex w-full flex-row items-center justify-between ">
        <TouchableOpacity
          onPress={() =>
            props.type === "light"
              ? navigation.navigate("LightSetting", {
                  name: props.name,
                  location: props.location,
                  color: props.color,
                  status: props.status,
                  schedule: props.schedule,
                })
              : props.type === "tv"
              ? navigation.navigate("SmartTVSetting", {
                  name: props.name,
                  location: props.location,
                  channel: props.channel,
                  state: props.state,
                })
              : navigation.navigate("SmartFanSetting", {
                  name: props.name,
                })
          }
        >
          <Text className="text-left font-semibold text-[#404040] text-[14px]">
            {props.name}
          </Text>
          <Text className="text-left font-regular text-[#404040] text-[12px]">
            {props.location}
          </Text>
        </TouchableOpacity>
        <Switch
          trackColor={{ false: "#D9D9D9", true: "#659A6E" }}
          thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <View className="flex w-full flex-row justify-between ">
        {/* <View className='flex flex-row' > */}
        {props.type === "light" ? (
          <View className="flex flex-row">
            <Image
              className="mr-4"
              source={require("../../assets/smallLight.png")}
            ></Image>
            <View className="flex flex-row justify-center items-center">
              <Text className="text-center font-regular text-[12px]">
                color number{" "}
              </Text>
              <Text className="text-center font-semibold text-[16px]">
                {props.color.currcolor}
              </Text>
            </View>
          </View>
        ) : props.type === "tv" ? (
          <View className="flex flex-row">
            <Image
              className="mr-4"
              source={require("../../assets/TVItem.png")}
            ></Image>
            <View className="flex flex-row justify-center items-center">
              <Text className="text-center font-regular text-[12px]">
                channel{" "}
              </Text>

              <Text className="text-center font-semibold text-[16px]">
                {props.channel}
              </Text>
            </View>
          </View>
        ) : (
          <View className="flex flex-row">
            <Image
              className="mr-4 "
              source={require("../../assets/images/smallFan.png")}
            ></Image>
          </View>
        )}

        {/* </View> */}
        <View className="flex space-y-[6px]">
          <TouchableOpacity
            onPress={() => setModalVisible(!modalVisible)}
            className="bg-white p-[3px] rounded-[4px]"
            style={styles.shadow}
          >
            <Icon
              name="square-edit-outline"
              size={18}
              type="material-community"
            />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-white p-[3px] rounded-[4px]"
            style={styles.shadow}
          >
            <Icon
              name="trash-can-outline"
              size={18}
              type="material-community"
            />
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              // Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
            <View className="flex flex-1 justify-end bg-[#000]/[.2]">
              <View
                className=" items-center space-y-5 pb-2 pt-5 bg-white w-full rounded-t-[30px] "
                style={{ elevation: 2 }}
              >
                <View className="w-[90%] pb-1 border-b-[1px]">
                  <Text className="text-[18px] font-semibold">Edit Device</Text>
                </View>
                <View className="space-y-3  justify-center items-center">
                  <View className="flex justify-center w-[275px] h-[40px] px-4 rounded-lg bg-white border border-[1px] border-[#808080]">
                    <TextInput placeholder={props.name} />
                  </View>
                  <View className="flex justify-center w-[275px] items-center px-4 rounded-lg bg-white">
                    <SelectList
                      setSelected={(val) => setSelected(val)}
                      placeholder={props.location}
                      data={rooms}
                      save="value"
                      boxStyles={{
                        height: 45,
                        width: 275,
                        borderColor: "#808080",
                      }}
                    />
                  </View>
                </View>
                <View className="flex  w-[90%] flex-row space-x-3  items-left">
                  <Pressable
                    className="border border-1 px-3 py-1 rounded-md"
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Cancel</Text>
                  </Pressable>
                  <TouchableOpacity
                    className="bg-[#107ADB] px-3 py-1 rounded-md"
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => handleSubmit()}
                  >
                    <Text className="font-medium text-white">Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
};

export default DeviceItem;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
  },
  shadow: {
    shadowColor: "#000",
    elevation: 1,
  },
});
