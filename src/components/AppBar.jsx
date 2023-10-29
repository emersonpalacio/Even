import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import StyleText from "./StyleText";
import theme from "../theme";
import { Constants } from "expo-constants";
import { Link, useLocation } from "react-router-native";
import { TouchableWithoutFeedback } from "react-native-web";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: "row",
    //paddingTop: Constants.statusBarHeiht + 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  scroll: {
    paddingBottom: 5,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 5,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

const AppBarTab = ({ children, to }) => {
  const { patname } = useLocation();
  const active = patname === to;

  const textStyles = [styles.text, active && styles.active];
  return (
    <Link to={to} component={TouchableWithoutFeedback}>
      <StyleText fontWeight="bold" style={textStyles}>
        {children}
      </StyleText>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab acitve to="/">
          repository
        </AppBarTab>
        <AppBarTab acitve to="/sigin">
          Sig In
        </AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
