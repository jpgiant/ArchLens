import React from "react";
import { Text, View } from "react-native";
import { loginStyles } from "../../styles/loginStyles";

export default function Signup() {
  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.text}>This is Login page</Text>
    </View>
  );
}
