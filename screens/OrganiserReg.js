import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const OrganiserReg = () => {
  return (
    <View style={styles.buttonContainer}>
      <TextInput>Company Name</TextInput>
      <TextInput>Company Registration Number</TextInput>
      <TextInput>Company Type</TextInput>
      <TextInput>Location</TextInput>
      <TextInput>Contact Name</TextInput>
      <TextInput>Email Address</TextInput>
      <TextInput>Telephone</TextInput>
      <TouchableOpacity>
        <Text style={[styles.buttonOutlineText, styles.button]}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrganiserReg;

const styles = StyleSheet.create({
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#5D62CB",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
