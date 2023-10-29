import react, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("login");
    }, 2000);
  });
  const handleGetToken = "";

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Splash</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  text: {
    fontWeight: "800",
    fontSize: 30,
    color: "white",
  },
});
