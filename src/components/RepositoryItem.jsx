import React from "react";
import { View, StyleSheet, Image } from "react-native";
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
    <View style={{ flex: 0 }}>
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

    {/* <Text> id:{props.id} </Text>
    <Text> Fullaname:{props.fullname} </Text>
    <Text>Description: {props.description}</Text>
    <Text> Language: {props.languaje}</Text>
    <Text>Start: {props.stargazerCpuent}</Text>
    <Text>Forks:{props.reviewCouent}</Text>
    <Text>Review: {props.ratingAverage}</Text> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
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
    borderRadius: 4,
    overflow: "hidden",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4,
  },
});

export default RepositoryItem;
