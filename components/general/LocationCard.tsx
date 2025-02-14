import { colors, textType } from "@/constants";
import { location } from "@/constants/types";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

interface locationCardProps {
  location: location;
}

const LocationCard = ({ location }: locationCardProps) => {
  const router = useRouter();
  const navigateToLocationDetails = (location: location) => {
    router.push({
      pathname: `/explore/${location.name}` as any,
      params: {
        location: location.name,
      },
    });
  };

  return (
    <TouchableOpacity
      style={{ ...styles.container, height: 250 }}
      onPress={() => navigateToLocationDetails(location)}
    >
      <View
        style={{
          height: "70%",
          width: "100%",
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
          overflow: "hidden",
        }}
      >
        <ImageBackground
          source={location.image as ImageSourcePropType}
          resizeMode="cover"
          className="h-full w-full"
          style={{ flex: 1 }}
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.56)", "rgba(0, 0, 0, 0.00)"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderTopLeftRadius: 7,
              borderTopRightRadius: 7,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
              paddingLeft: 6,
              position: "absolute",
              bottom: 2,
            }}
          >
            <FontAwesome6 name="location-dot" size={16} color={colors.white} />

            <Text
              style={{
                alignSelf: "flex-end",
                ...textType.header,
                color: colors.white,
                fontSize: 16,
              }}
            >
              {location.name.split(" ")[0]}
            </Text>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          height: "30%",
          width: "100%",
          paddingHorizontal: 10,
          justifyContent: "center",
          borderRadius: 7,
        }}
      >
        <Text
          style={{
            ...textType.header,
          }}
        >
          {location.name.split(" ")[1]} {location.name.split(" ")[2]}{" "}
          {location.name.split(" ")[3]}
        </Text>

        <Text
          style={{
            ...textType.subHeader,
            fontSize: 10,
          }}
        >
          {location.overview}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 7,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4.265 },
    shadowOpacity: 0.2,
    shadowRadius: 30.921 / 2,
    elevation: 5,
    marginRight: 32,
  },
});

export default LocationCard;
