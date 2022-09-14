import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from "react";
import { CurrentRenderContext, useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/AntDesign";
import { useContext } from "react";
import { UserContext } from "../src/contexts/UserContext";

const Settings = () => {
  console.log(UserContext);
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const navigation = useNavigation();
  const volunteerHistory = () => {
    navigation.navigate("Volunteer History");
  };

  const preferencesLink = () => {
    navigation.navigate("Set Preferences");
  };
  return (
    <View>
      <View style={styles.flexCol}>
        {loggedInUser.firstName ? (
          <Ionicons name="smileo" size={40} />
        ) : (
          <Ionicons name="idcard" size={40} />
        )}
        <Text style={styles.text}>
          {loggedInUser.company_name
            ? `${loggedInUser.company_name}`
            : `${loggedInUser.firstName}`}
        </Text>
      </View>

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
  flexCol: {
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#3D5C43",
  },
  text: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#3D5C43",
    fontSize: 20,
    marginBottom: 20,
    marginTop: 0,
  },
});
