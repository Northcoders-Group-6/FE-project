import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/AntDesign";

const OrgEventConfirmation = () => {
  return (
    <View>
      <Text style={styles.smile}>
        <Ionicons name="smileo" size={50} />
      </Text>

      <Text style={styles.text}>Your event has been confirmed!</Text>

      <Text style={styles.text1}>Fundraising at Whitworth Park</Text>
      <Text style={styles.text2}>
        <Ionicons name="calendar" size={22} /> From 9AM - 3.30PM Thur 14 Sep
      </Text>
      <Text style={styles.text2}>
        <Ionicons name="team" size={22} /> Up to 4 volunteers needed
      </Text>
      <Text style={styles.text2}>
        <Ionicons name="gift" size={22} /> 50% off all food at Deaf Institute
        for one month.
      </Text>
      <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
        <Text style={styles.editEvent}>Edit Event</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OrgEventConfirmation;

const styles = StyleSheet.create({
  smile: {
    color: "#6D326D",
    textAlign: "center",
    marginTop: 35,
    marginBottom: 20,
  },
  text: {
    color: "#6D326D",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  text1: {
    color: "#6D326D",
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 60,
    paddingBottom: 20,
    marginLeft: 10,
  },
  text2: {
    color: "#4D4B4B",
    textAlign: "left",
    fontSize: 16,
    fontWeight: "light",
    paddingTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    paddingBottom: 5,
  },
  button: {
    backgroundColor: "#6D326D",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
  },
  buttonOutline: {
    backgroundColor: "#6D326D",
    marginTop: 10,
    borderColor: "#3D5C43",
    alignItems: "center",
    marginBottom: 1,
  },
  editEvent: {
    color: "white",
  },
});
