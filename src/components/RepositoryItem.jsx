import React from "react";
import { View, StyleSheet, Image, Platform } from "react-native";
import StyleText from "./StyleText";
import RepositoriStats from "./RepositoriStats";
import theme from "../theme";

const ReposirtoryItemHeader = ({
  ownerAavatar,
  id,
  fullname,
  description,
  languaje,
}) => (
  <View style={{ flexDirection: "row", paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAavatar }} />
    </View>
    <View style={{ flex: 1, flexDirection: "column", paddingLeft: 10 }}>
      <StyleText>{id} </StyleText>
      <StyleText fontSize="subheading" fontWeight="bold">
        {fullname}
      </StyleText>
      <StyleText> {description}</StyleText>
      <StyleText style={styles.languaje}> {languaje}</StyleText>
    </View>
  </View>
);

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <ReposirtoryItemHeader {...props} />
    <RepositoriStats {...props} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  strong: {
    fontWeight: "bold",
    color: "#09f",
    marginBottom: 5,
  },
  languaje: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-start",
    marginTop: 4,
    marginVertical: 4,
    overflow: "hidden",
    borderRadius: 4,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
