import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/AntDesign";
const Settings = () => {
  const navigation = useNavigation();

  const volunteerHistory = () => {
    navigation.navigate("Volunteer History");
  };

  const preferencesLink = () => {
    navigation.navigate("Set Preferences");
  };
  return (
    <View>
      <Text style={styles.text}>
        <Ionicons name="smileo" size={20} />
        {"\n"}Jodie
      </Text>
      <TouchableOpacity onPress={volunteerHistory} style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={preferencesLink} style={styles.button}>
        <Text style={styles.buttonText}>Set Preferences</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View My History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Notification Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Email Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>FAQ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    marginTop: 8,
    padding: 18,
    borderColor: "#3D5C43",
    borderWidth: 1,
  },

  buttonText: {
    color: "#3D5C43",
  },
  text: {
    paddingTop: 10,
    color: "#3D5C43",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    marginTop: 10,
  },
});
