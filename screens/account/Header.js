import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.heading}>LOGO</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6ad380",
    flex: 0,
    flexDirection: "row",
  },
  heading: {
    color: "white",
    fontSize: 40,
  },
});

export default Header;
