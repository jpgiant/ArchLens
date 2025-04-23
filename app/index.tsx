import React from "react";
import { Text, View } from "react-native";
import { rootStyles } from "../styles/rootStyles";
import { Button } from "react-native-paper";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={rootStyles.container}>
      <Link href="/home" style={rootStyles.button}>
        <Button mode="contained">Go to Home</Button>
      </Link>
      <Link href="/login" style={rootStyles.button} asChild>
        <Button mode="contained">Go to Login</Button>
      </Link>
      <Link href="/signup" style={rootStyles.button} asChild>
        <Button mode="contained">Go to Signup</Button>
      </Link>
    </View>
  );
}
