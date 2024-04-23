import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";

const DATA = [
  {
    id: "1",
    title: "My Home",
  },
  {
    id: "2",
    title: "Add Device",
  },
  {
    id: "3",
    title: "Power Usage",
  },
  {
    id: "4",
    title: "Premium Plan",
  },
  {
    id: "5",
    title: "Setting",
  },
  {
    id: "6",
    title: "Log Out",
  },
];

const Item = ({ title, navigation }) => (
  <TouchableOpacity
    onPress={() => {
      if (title.includes("My Home")) {
        navigation.navigate("My Home");
      }
    }}
  >
    <View style={{ marginLeft: 20, marginTop: 40 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={{
            fontSize: 22,
            color: title === "Log Out" ? "red" : "black",
            fontFamily: "Poppins-Regular",
          }}
        >
          {title}
        </Text>

        {title === "Log Out" ? (
          <FeatherIcon
            name="log-out"
            size={25}
            style={{ marginRight: 7, color: "red" }}
          />
        ) : (
          <Icon name="chevron-right" size={20} style={{ marginRight: 10 }} />
        )}
      </View>

      <View
        style={{
          borderBottomWidth: 1.5,
          borderBottomColor: title === "Log Out" ? "red" : "black",
        }}
      />
    </View>
  </TouchableOpacity>
);

export default function MyAccountScreen({ navigation }) {
  return (
    <View>
      <View
        style={{
          height: 248,
        }}
      >
        <LinearGradient
          locations={[0.19, 0.37, 1]}
          colors={["#659a6e", "#659a6e", "rgba(101,154,110,0.5)"]}
          style={{ flex: 1, flexDirection: "row" }}
        >
          <View style={styles.avatar}>
            <Image
              source={require("../../assets/images/avatar.png")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View style={styles.info}>
            <Text
              style={{
                fontSize: 28,
                marginTop: 10,
                color: "white",
                fontFamily: "Poppins-SemiBold",
              }}
            >
              Tung Nguyen
            </Text>
            <Text
              style={{
                fontSize: 23,
                marginTop: 5,
                color: "white",
                fontFamily: "Poppins-Regular",
              }}
            >
              HCMUT
            </Text>
            <Text
              style={{
                fontSize: 20,
                marginTop: 5,
                color: "white",
                fontFamily: "Poppins-Regular",
              }}
            >
              Since 2024
            </Text>
          </View>
        </LinearGradient>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.settingList}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item title={item.title} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    height: 120,
    width: 120,
    marginLeft: 40,
    marginTop: 74,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    width: "60%",
    height: 128,

    flexDirection: "column",
    marginLeft: 30,
    marginTop: 70,
  },
  settingList: {
    width: 390,
    height: "74%",
    backgroundColor: "white",
    marginTop: 20,
    borderRadius: 30,
  },
});
