import React from "react";
import { FlatList, View, Text } from "react-native";
import data from "../data/data.js";
import RepositoryItem from "./RepositoryItem.jsx";

const Repository = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: dat }) => <RepositoryItem {...dat} />}
    />

    // <div>
    //   {data.map((dat) => (
    //     <View key={dat.id}>
    //       <Text>id:{dat.id}</Text>
    //       <Text>Description: {dat.description}</Text>
    //       <Text> Language: {dat.languaje}</Text>
    //       <Text>Start: {dat.stargazerCpuent}</Text>
    //       <Text>Forks:{dat.reviewCouent}</Text>
    //       <Text>Review: {dat.ratingAverage}</Text>
    //     </View>
    //   ))}
    // </div>
  );
};

export default Repository;
