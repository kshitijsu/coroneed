import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.bodyHeading}>ACCOUNT</Text>
        <Text>
          Login/Create an account to know about grocery, medical, milk, meat
          shops around you.
        </Text>
        <Text style={{ paddingBottom: 30 }}>
          Know about nearby COVID-19 testing centers, hospitals and Govt.
          shelters
        </Text>
        <Button title='Create Account' color='#6ad380' />
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
    // fontFamily: "NuntioSans-Bold",
  },
});

export default Header;
