import React from "react";
import { Text, View } from "react-native";
import { signupStyles } from "../../styles/signupStyles";

export default function Signup() {
  return (
    <View style={signupStyles.container}>
      <Text style={signupStyles.text}>This is Signup page</Text>
    </View>
  );
}
