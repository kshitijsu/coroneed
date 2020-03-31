import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.bodyHeading}>LOGIN</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: 50,
  },
  bodyHeading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 40,
  },
});

export default Header;
