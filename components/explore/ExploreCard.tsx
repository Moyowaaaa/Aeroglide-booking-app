import { colors, textType } from "@/constants";
import { location } from "@/constants/types";
import { splitAmountByThousands } from "@/utils";
import { EvilIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SkeletonLoader from "../general/SkeletonLoader";

interface locationCardProps {
  location: location;
}
const ExploreCard = ({ location }: locationCardProps) => {
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
      style={{ ...styles.container }}
      onPress={() => navigateToLocationDetails(location)}
    >
      <View
        style={{
          height: "70%",
          width: "100%",
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
          padding: 4,
        }}
      >
        <ImageBackground
          source={location.image as ImageSourcePropType}
          resizeMode="cover"
          style={{
            flex: 1,
            ...styles.image,
            zIndex: 5,
            height: "100%",
            width: "100%",
          }}
          imageStyle={{
            borderRadius: 4,
          }}
        />

        <SkeletonLoader />
      </View>

      <View
        style={{
          height: "30%",
          gap: 4,
          paddingLeft: 10,
        }}
      >
        <Text
          style={{
            ...textType.header,
            fontSize: 16,
            lineHeight: 20,
          }}
        >
          {location.name.split(" ")[0]}, {location.name.split(" ")[1]}{" "}
          {location.name.split(" ")[2]}
        </Text>

        <View className="flex-row items-center gap-1 ">
          <EvilIcons name="location" size={14} color={colors.darkGrey} />
          <Text
            style={{
              ...textType.paragraph,
              fontSize: 12,

              color: colors.darkGrey,
            }}
          >
            {location.landmark}
          </Text>
        </View>

        <View
          className="flex-row justify-between w-full "
          style={{ alignSelf: "flex-end", marginTop: 6 }}
        >
          <Text
            style={{
              ...textType.header,
              fontSize: 18,
              lineHeight: 20,
              color: colors.orange,
            }}
          >
            ${splitAmountByThousands(location.cost)}{" "}
            <Text
              style={{
                ...textType.subHeader,
                color: colors.grey,
                fontSize: 10,
              }}
            >
              round trip
            </Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "47%",
    height: 325,
    borderRadius: 6,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    borderRadius: 20,
  },
});

export default ExploreCard;
