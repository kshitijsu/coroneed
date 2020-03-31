import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.heading}>
          Learn more about COVID-19 and its prevention tips. Here
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 0,
    flexDirection: "row",
    padding: 15,
  },
  heading: {
    fontSize: 15,
  },
});

export default Header;
