import React from "react";
import { View } from "react-native";
import StyleText from "./StyleText";

const RepositoriStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyleText align="center" fontWeight="bold">
          Start
        </StyleText>
        <StyleText align="center" fontWeight="bold">
          {props.stargazerCpuent}
        </StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          Forks
        </StyleText>
        <StyleText align="center" fontWeight="bold">
          {props.reviewCouent}
        </StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          Review:
        </StyleText>
        <StyleText align="center" fontWeight="bold">
          {props.ratingAverage}
        </StyleText>
      </View>
    </View>
  );
};

export default RepositoriStats;
