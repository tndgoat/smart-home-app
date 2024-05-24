import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";

const rooms = [
  "Living Room 1",
  "Kitchen",
  "Bedroom 1",
  "Toilet",
  "Living Room 2",
  "Bedroom 2",
];

function Widget({ roomName, navigation }) {
  let img_link = require("../../assets/images/smart ac.png");
  if (roomName.includes("Living Room")) {
    img_link = require("../../assets/images/Living Room.png");
  } else if (roomName.includes("Kitchen")) {
    img_link = require("../../assets/images/Kitchen.png");
  } else if (roomName.includes("Bedroom")) {
    img_link = require("../../assets/images/Bedroom.png");
  } else {
    img_link = require("../../assets/images/Toilet.png");
  }

  return (
    <TouchableOpacity
      // onPress={() => {
      //   navigation.navigate("Room");
      // }}
      onPress={() => {
        navigation.navigate("Room", { roomName: roomName });
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
          backgroundColor: "#E2F3E5",
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
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "black",
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {roomName}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: "#FFE266",
                marginTop: 7,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 2,
              }}
            >
              <Text style={{ fontFamily: "Poppins-SemiBold" }}>4</Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                marginTop: 7,
                color: "black",
                fontFamily: "Poppins-Regular",
              }}
            >
              devices
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

function AddRoom({ modalVisible, setModalVisible }) {
  const [val, setVal] = useState("");
  const [value, setValue] = useState(null);

  const data = [
    { label: "Living Room", value: "1" },
    { label: "Kitchen", value: "2" },
    { label: "Bedroom", value: "3" },
    { label: "Toilet", value: "4" },
  ];

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "#F0F5F4",
            padding: 20,
            borderRadius: 20,
            marginBottom: "50%",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                borderBottomWidth: 2,
                width: "40%",
                borderBottomColor: "black",
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              marginTop: 10,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Add your room
          </Text>
          <View style={{ alignItems: "center", marginTop: 3 }}>
            <View
              style={{
                borderBottomWidth: 1.5,
                width: "105%",
                borderBottomColor: "black",
              }}
            />
          </View>
          <View style={{ marginTop: 30, alignItems: "center" }}>
            <TextInput
              style={styles.textInput}
              onChangeText={setVal}
              value={val}
              placeholder="Enter your room's name..."
              placeholderTextColor="grey"
            />
          </View>
          <View style={{ marginTop: "0%", alignItems: "center" }}>
            <Dropdown
              style={{
                borderWidth: 1,
                height: 40,
                borderRadius: 10,
                margin: 10,
                width: "90%",
              }}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Select room type"
              placeholderStyle={{
                color: "grey",
                fontSize: 14,
                marginLeft: 12,
              }}
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
              selectedTextStyle={{ marginLeft: 12 }}
            />
          </View>

          <View style={{ flexDirection: "row", marginTop: "12%" }}>
            <View style={styles.button1Container}>
              <Button
                title="Cancel"
                color="black"
                onPress={() => {
                  setModalVisible(false);
                  setValue("");
                  setVal("");
                }}
              />
            </View>
            <View style={styles.button2Container}>
              <Button
                title="Save"
                color="white"
                onPress={() => {
                  setModalVisible(false);
                  setValue("");
                  setVal("");
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default function MyHomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={{ backgroundColor: "#F0F5F4" }}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            fontSize: 18,
            marginLeft: 15,
            fontFamily: "Poppins-SemiBold",
          }}
        >
          Room
        </Text>
        <View style={styles.numberOfRoomContainer}>
          <Text style={{ color: "white", fontFamily: "Poppins-SemiBold" }}>
            6
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 18,
              marginRight: 5,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            Add more room
          </Text>
          <TouchableOpacity
            style={styles.addButtonContainer}
            onPress={() => setModalVisible(true)}
          >
            <Icon name="plus" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          margin: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {rooms.map((room, index) => (
          <View key={index}>
            <Widget roomName={room} navigation={navigation} />
          </View>
        ))}
      </View>
      <View>
        <AddRoom
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1.4,
    padding: 10,
    width: "90%",
    borderRadius: 10,
    borderColor: "grey",
  },
  button1Container: {
    width: 80,
    height: 40,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    marginRight: "2%",
    fontFamily: "Poppins-Regular",
  },
  button2Container: {
    width: 80,
    height: 40,
    borderRadius: 8,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "#107ADB",
    fontFamily: "Poppins-Regular",
  },
  headerContainer: {
    height: 36,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  numberOfRoomContainer: {
    height: 20,
    width: 20,
    backgroundColor: "#4C7380",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "-30%",
  },
  addButtonContainer: {
    height: 36,
    width: 36,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
