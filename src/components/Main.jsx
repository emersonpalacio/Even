import React from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import Repository from "./Repository";
import AppBar from "./AppBar";
import { Route, Routes, Redirect } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <AppBar /> */}
      <Routes>
        <Route path="/" element={<Repository />}></Route>
        <Route path="/sigin" element={<Text>Sign In</Text>}></Route>
      </Routes>
      {/*  */}
    </View>
  );
};

export default Main;
