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
// import { db } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";

const StudentReg = () => {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [studentId, setStudentId] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ android: undefined, ios: "padding" })}
    >
      <View style={styles.buttonContainer}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        ></TextInput>
        <TextInput
          placeholder="Surname"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        ></TextInput>
        <TextInput
          placeholder="Student ID number"
          value={studentId}
          onChangeText={(text) => setStudentId(text)}
        ></TextInput>
        <TextInput
          placeholder="Location"
          value={location}
          onChangeText={(text) => setLocation(text)}
        ></TextInput>
        <TextInput
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          placeholder="Telephone"
          value={telephone}
          onChangeText={(text) => setTelephone(text)}
        ></TextInput>
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
