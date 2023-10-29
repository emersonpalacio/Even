import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { user_login } from "./user_api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setseepassword, setSetseepassword] = useState(true);
  const [checkValidEMial, setCheckValidEMial] = useState(false);

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEMial(false);
    } else {
      setCheckValidEMial(true);
    }
  };

  const checkPasswordValidaty = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "Password must not contain whitesSpaces";
    }

    const isContainsUpperCase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUpperCase.test(value)) {
      return "Password must have at least one Uppercase letter";
    }

    const isContainerNumber = /^(?=.*[0-9]).*$/;
    if (isContainerNumber.test(value)) {
      return "Password must be 8-16 Characters Long. ";
    }
    return null;
  };

  const handleLogin = () => {
    const checkPassword = checkPasswordValidaty(password);
    if (!checkPassword) {
      user_login({
        email: email,
        password: password,
      })
        .then((result) => {
          if (result.status == 200) {
            AsyncStorage.setItem("AccesToken", result.data);
            navigation.replace("Home");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert(checkPassword);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={(text) => handleCheckEmail(text)}
        />
      </View>
      {checkValidEMial ? (
        <Text>Wrong Format Email </Text>
      ) : (
        <Text style={styles.text}>fallido</Text>
      )}

      <View>
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
        <TouchableOpacity onPress={() => setPassword()}></TouchableOpacity>
      </View>
      {email == "" || (password == checkValidEMial) == true ? (
        <TouchableOpacity disabled onPress={handleLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.text}> Login</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 20,
  },
  text: {
    // fontWeight: "100",
    fontSize: 10,
    color: "black",
  },
});
