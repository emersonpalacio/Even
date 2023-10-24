import React from "react";
import { View, StyleSheet } from "react-native";
import StyleText from "./StyleText";
import theme from "../theme";
import { Constants } from "expo-constants";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <StyleText fontWeight="bold" style={styles.text}>
        repository
      </StyleText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    //paddingTop: Constants.statusBarHeiht + 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    color: theme.appBar.textPrimary,
  },
});
export default AppBar;
