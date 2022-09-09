import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WhichUser = () => {
  const navigation = useNavigation();

  const studentLogin = () => {
    navigation.replace("Student Reg");
  };

  const orgLogin = ()=>{
    navigation.replace('Organiser Reg')
  }
  return (
    <View>
      <Text style={styles.textStyle}>Are you...</Text>
      <TouchableOpacity onPress={studentLogin} style={styles.button}>
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={orgLogin} style={[styles.button, styles.buttonOutline]}>
        <Text style={styles.buttonOutlineText}>Organiser</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WhichUser;

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
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#5D62CB",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#5D62CB",
    fontWeight: "700",
    fontSize: 16,
  },
});
