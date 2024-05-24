import React from "react";
import { Dimensions, Image, ScrollView, Text, View } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import Icon1 from "react-native-vector-icons/Feather";
import Icon0 from "react-native-vector-icons/Feather";

const chartConfig = {
  backgroundGradientFrom: "white",
  //backgroundGradientFromOpacity: 0, // hoàn toàn trong suốt
  backgroundGradientTo: "white",
  //backgroundGradientToOpacity: 0.5,
  //   color: (opacity = 1) => `rgba(96, 50, 229, ${opacity})`,
  //backgroundColor: "#F0F5F4",
  backgroundGradientFromOpacity: 0,
  color: () => "black",
  strokeWidth: 2, // optional, default 3
  barPercentage: 1,

  useShadowColorFromDataset: false, // optional
  labelColor: () => "#4C7380",
  propsForBackgroundLines: {
    strokeDasharray: "", // solid background lines with no dashes
  },
};
const screenWidth = Dimensions.get("window").width;
const data = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 40],
      color: () => "#4C7380",
      strokeWidth: 2,
    },
  ],
};

const device = [
  {
    name: "Television",
    rooms: "Kitchen - Bedroom",
    info: "8 unit | 12 jam",
    amount: "1000",
    unit: "Kw/h",
    rate: "-11.2%",
    grow: 0,
    img_link: require("../../assets/images/lamp.png"),
  },
  {
    name: "Wireless Speaker",
    rooms: "Bedroom",
    info: "2 unit | 3 jam",
    amount: "1090",
    unit: "Kw/h",
    rate: "-10.2%",
    grow: 1,
    img_link: require("../../assets/images/wireless speaker.png"),
  },
  {
    name: "Television",
    rooms: "Living Room",
    info: "1 unit | 12 jam",
    amount: "1000",
    unit: "Kw/h",
    rate: "-100.2%",
    grow: 0,
    img_link: require("../../assets/images/television.png"),
  },
  {
    name: "Wifi",
    rooms: "Kitchen - Bedroom",
    info: "2 unit | 22 jam",
    amount: "22",
    unit: "Kb/s",
    rate: "-20.2%",
    img_link: require("../../assets/images/wifi.png"),
  },
];

export default function PowerUsageScreen() {
  return (
    <ScrollView style={{ backgroundColor: "#F0F5F4" }}>
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            alignItems: "center",
            justifyContent: "center",
            height: 350,
            borderRadius: 20,
            marginTop: "3%",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "-15%",
              marginLeft: "-10%",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                color: "#4C7380",
                fontSize: 17,
                marginLeft: "12%",
                marginBottom: "2%",
              }}
            >
              Usage this week: 2500
            </Text>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                color: "#4C7380",
                fontSize: 17,
                marginBottom: "2%",
              }}
            >
              {" "}
              watt
            </Text>
          </View>

          <Text
            style={{
              marginLeft: "-70%",
              fontFamily: "Poppins-SemiBold",
              color: "#4C7380",
              fontSize: 13,
            }}
          >
            KwH
          </Text>

          <LineChart
            data={data}
            width={380}
            height={220}
            chartConfig={chartConfig}
            withShadow={false}
            yAxisInterval={10}
            bezier
            style={{ marginLeft: "-7%" }}
          />

          <Text
            style={{
              marginLeft: "90%",
              fontFamily: "Poppins-SemiBold",
              color: "#4C7380",
              fontSize: 13,
              marginTop: "-7.3%",
            }}
          >
            Day
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            borderRadius: 20,
            marginTop: 20,
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold" }}>
              Total today:{" "}
            </Text>
            <View
              style={{
                height: 20,
                width: 20,
                backgroundColor: "#4C7380",
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontFamily: "Poppins-SemiBold" }}>
                4
              </Text>
            </View>
          </View>

          {device.map((d, index) => (
            <View
              style={{
                backgroundColor: "#D8E4E8",
                width: "92%",
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 10,
                paddingHorizontal: 10,
              }}
              key={index}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={d.img_link}
                  alt=""
                  style={{
                    width: 60,
                    resizeMode: "contain",
                  }}
                />
                <View style={{ marginLeft: 15 }}>
                  <Text
                    style={{ fontFamily: "Poppins-SemiBold", fontSize: 15 }}
                  >
                    {d.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      color: "#404040",
                      fontSize: 13,
                    }}
                  >
                    {d.rooms}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Poppins-Regular",
                      color: "#878787",
                      fontSize: 13,
                    }}
                  >
                    {d.info}
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: "-6%", alignItems: "flex-end" }}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "Poppins-SemiBold",
                      color: "#4C7380",
                    }}
                  >
                    {d.amount}{" "}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: "Poppins-Regular",
                      color: "#4C7380",
                    }}
                  >
                    {d.unit}
                  </Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  {d.grow == 1 ? (
                    <Icon1 name="trending-up" size={15} color="#659A6E" />
                  ) : (
                    <Icon0 name="trending-down" size={15} color="#9A7265" />
                  )}
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: "Poppins-Regular",
                      //color: "#659A6E",
                      color: d.grow == 1 ? "#659A6E" : "#9A7265",
                      marginLeft: 2,
                    }}
                  >
                    {d.rate}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
