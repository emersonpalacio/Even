import React from "react";
import { View, Text, StyleSheet } from "react-native";
import StyleText from "./StyleText";
import RepositoriStats from "./RepositoriStats";

const parseThounsands = (value) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value);
};

const RepositoryStarts = (props) => {
  return (
    <RepositoriStats {...props} />
    // <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
    //   <View>
    //     <StyleText align="center" fontWeight="bold">
    //       Start
    //     </StyleText>
    //     <StyleText align="center" fontWeight="bold">
    //       {props.stargazerCpuent}
    //     </StyleText>
    //   </View>
    //   <View>
    //     <StyleText align="center" fontWeight="bold">
    //       Forks
    //     </StyleText>
    //     <StyleText align="center" fontWeight="bold">
    //       {props.reviewCouent}
    //     </StyleText>
    //   </View>
    //   <View>
    //     <StyleText align="center" fontWeight="bold">
    //       Review:
    //     </StyleText>
    //     <StyleText align="center" fontWeight="bold">
    //       {props.ratingAverage}
    //     </StyleText>
    //   </View>
    // </View>
  );
};

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyleText>id:{props.id} </StyleText>
    <StyleText fontSize="subheading" fontWeight="bold">
      Fullaname:{props.fullname}{" "}
    </StyleText>
    <StyleText>Description: {props.description}</StyleText>
    <StyleText>Language: {props.languaje}</StyleText>

    <RepositoryStarts {...props} />

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
});

export default RepositoryItem;
