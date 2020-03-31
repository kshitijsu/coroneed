import React from "react";
import { StyleSheet, View } from "react-native";
import FirstScreen from "./screens/account/FirstScreen";
import SecondScreen from "./screens/login/SecondScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <FirstScreen />
      {/* <SecondScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
});
