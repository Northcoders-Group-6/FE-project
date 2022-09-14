import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const WhichUser = () => {
  const navigation = useNavigation();

  const studentLogin = () => {
    navigation.navigate("Student Reg");
  };

  const orgLogin = () => {
    navigation.navigate("Organiser Reg");
  };
  return (
    <View>
      <Text style={styles.textStyle}>Register for Voluntreats</Text>
      <TouchableOpacity onPress={studentLogin} style={styles.button}>
        <Text style={styles.buttonText}>Student</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.textBelow}>
          Are you a student that is looking for volunteer opportunities?
          Voluntreats offers a range of events to get involved with in your
          local area, making a difference in the community. Here, you can build
          your experience while making changes for the greater good!
        </Text>
      </View>
      <TouchableOpacity
        onPress={orgLogin}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.buttonOutlineText}>Organiser</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.textBelow}>
          Are you a business who wants to arrange an activity that requires
          student volunteers? Voluntreats is the perfect place to get started in
          one simple, easy to use app. Sign up and get started by creating a
          local event!
        </Text>
      </View>
    </View>
  );
};

export default WhichUser;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "500",
    color: "#4D4B4B",
    marginTop: 40,
    marginLeft: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 60,
  },
  button: {
    backgroundColor: "#3D5C43",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginLeft: 40,
    // marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutline: {
    backgroundColor: "#6D326D",
    marginTop: 5,
    borderColor: "#6D326D",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  textBelow: {
    marginTop: 20,
    marginBottom: 50,
    color: "black",
    fontSize: 16,
    marginLeft: 15,
  },
});
