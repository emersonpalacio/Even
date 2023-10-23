import React from "react";
import { View } from "react-native";
import StyleText from "./StyleText";

const parseThounsands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoriStats = (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
      <View>
        <StyleText align="center" fontWeight="bold">
          Start
        </StyleText>
        <StyleText align="center" fontWeight="bold">
          {parseThounsands(props.stargazerCpuent)}
        </StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          Forks
        </StyleText>
        <StyleText align="center" fontWeight="bold">
          {parseThounsands(props.reviewCouent)}
        </StyleText>
      </View>
      <View>
        <StyleText align="center" fontWeight="bold">
          Review:
        </StyleText>
        <StyleText align="center" fontWeight="bold">
          {parseThounsands(props.ratingAverage)}
        </StyleText>
      </View>
    </View>
  );
};

export default RepositoriStats;
