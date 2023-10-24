import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import Repository from "./Repository";
import AppBar from "./AppBar";
import { Switch } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />

      <Repository />
    </View>
  );
};

export default Main;
