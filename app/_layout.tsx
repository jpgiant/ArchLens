import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Index", headerShown: false }}
      />
      <Stack.Screen
        name="home/index"
        options={{ title: "Home", headerShown: false }}
      />
      <Stack.Screen
        name="login/index"
        options={{ title: "Login", headerShown: false }}
      />
      <Stack.Screen
        name="signup/index"
        options={{ title: "Signup", headerShown: false }}
      />
    </Stack>
  );
}
