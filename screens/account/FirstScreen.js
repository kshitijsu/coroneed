import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default function FirstScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.body}>
        <Body />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  header: {
    flex: 2,
    backgroundColor: "#6ad380",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 4,
  },
});
