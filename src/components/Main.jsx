import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import Repository from "./Repository";

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Repository />
    </View>
  );
};

export default Main;
