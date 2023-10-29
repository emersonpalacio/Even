import React from "react";
import { StyleSheet } from "react-native";
export default function Home() {
  return (
    <Viwe style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </Viwe>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    color: "orange",
  },
});
