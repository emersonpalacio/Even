import React, { useState } from "react";
import { FlatList, View, Text, TextInput, Button } from "react-native";
import axios from "axios";
// import data from "../data/data.js";
// import RepositoryItem from "./RepositoryItem.jsx";

const Repository = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://eventbackend-production.up.railway.app/api/user/login",
        {
          Email: email,
          Password: password,
        }
      );
      //console.log(response);
      //console.log(response.data.message);

      if (response.data.message == `Usuario logueado exitosamente`) {
        alert(`estas dentro del home`);
      } else {
        alert("Inicio de sesión fallido. Verifica tus credenciales.");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  return (
    <>
      {/* <Text>hola data</Text> */}
      <View>
        <Text>Inicio de sesión</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Iniciar sesión" onPress={handleLogin} />
      </View>
    </>
  );
};

export default Repository;
