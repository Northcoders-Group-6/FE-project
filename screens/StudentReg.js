import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const StudentReg = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ android: undefined, ios: "padding" })}
    >
      <View style={styles.buttonContainer}>
        <TextInput placeholder="First Name"></TextInput>
        <TextInput placeholder="Surname"></TextInput>
        <TextInput placeholder="Student ID number"></TextInput>
        <TextInput placeholder="Location"></TextInput>
        <TextInput placeholder="Email Address"></TextInput>
        <TextInput placeholder="Telephone"></TextInput>
        <TouchableOpacity>
          <Text style={[styles.buttonOutlineText, styles.button]}>Submit</Text>
        </TouchableOpacity>
        <Text>
          By signing up I agreee to Voluntreat's terms of service and privacy
          policy
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default StudentReg;

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
