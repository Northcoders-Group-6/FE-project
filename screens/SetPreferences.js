import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const EditProfile = () => {
  const [checked, setChecked] = React.useState("first");
  const navigation = useNavigation();

  const savePref = () => {
    navigation.navigate("Settings");
  };
  return (
    <View>
      <Text style={styles.oppsText1}>
        Select the type of {"\n"} activities you would {"\n"} like to see:
      </Text>
      <View style={styles.buttons}>
        <Text style={styles.oppsText}>Indoor</Text>
        <Checkbox
          value="indoor"
          status={checked === "indoor" ? "checked" : "unchecked"}
          onPress={() => setChecked("indoor")}
          label="indoor"
          color="#E48510"
        />
        <Text style={styles.oppsText}>Outdoor</Text>
        <Checkbox
          value="outdoor"
          status={checked === "outdoor" ? "checked" : "unchecked"}
          onPress={() => setChecked("outdoor")}
          label="outdoor"
          color="#E48510"
        />
        <Text style={styles.oppsText}>Both</Text>
        <Checkbox
          value="third"
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
          label="third"
          color="#E48510"
        />
      </View>
      <View style={styles.buttons}>
        <Text style={styles.oppsText}>Active</Text>
        <Checkbox
          value="active"
          status={checked === "active" ? "checked" : "unchecked"}
          onPress={() => setChecked("active")}
          label="active"
          color="#E48510"
        />
        <Text style={styles.oppsText}>Relaxed</Text>
        <Checkbox
          value="relaxed"
          status={checked === "relaxed" ? "checked" : "unchecked"}
          onPress={() => setChecked("relaxed")}
          label="relaxed"
          color="#E48510"
        />
        <Text style={styles.oppsText}>Both</Text>
        <Checkbox
          value="activeboth"
          status={checked === "activeboth" ? "checked" : "unchecked"}
          onPress={() => setChecked("activeboth")}
          label="activeboth"
          color="#E48510"
        />
      </View>
      <View style={styles.buttons}>
        <Text style={styles.oppsText}>Social</Text>
        <Checkbox
          value="social"
          status={checked === "social" ? "checked" : "unchecked"}
          onPress={() => setChecked("social")}
          label="social"
          color="#E48510"
        />
        <Text style={styles.oppsText}>Independent</Text>
        <Checkbox
          value="independent"
          status={checked === "independent" ? "checked" : "unchecked"}
          onPress={() => setChecked("independent")}
          label="independent"
          color="#E48510"
        />
        <Text style={styles.oppsText}>Both</Text>
        <Checkbox
          value="socialboth"
          status={checked === "socialboth" ? "checked" : "unchecked"}
          onPress={() => setChecked("socialboth")}
          label="socialboth"
          color="#E48510"
        />
        <Text style={styles.oppsText2}>Show Remote Opportunities</Text>
        <Checkbox
          value="remote"
          status={checked === "remote" ? "checked" : "unchecked"}
          onPress={() => setChecked("remote")}
          label="remote"
          color="#E48510"
        />
        <TouchableOpacity
          onPress={savePref}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.savePreferences}>Save Preferences</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 60,
    marginLeft: 25,
    marginRight: 25,
    alignItems: "center",
  },
  oppsText: {
    color: "##4D4B4B",
    fontWeight: "light",
    fontSize: 16,
    textAlign: "left",
    marginLeft: 20,
    alignItems: "center",
  },
  oppsText1: {
    color: "#3D5C43",
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 40,
    marginLeft: 25,
    marginRight: 25,
  },
  oppsText2: {
    marginBottom: 60,
    marginLeft: 20,
    fontWeight: "400",
    fontSize: 16,
  },

  rows: {
    justifyContent: "space-between",
    marginTop: 100,
  },
  button: {
    backgroundColor: "#3D5C43",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#3D5C43",
    marginTop: 20,
    borderColor: "#3D5C43",
    alignItems: "center",
    marginBottom: 40,
  },
  savePreferences: {
    color: "white",
  },
});
