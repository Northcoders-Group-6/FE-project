import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

const EditProfile = () => {
  const [checked, setChecked] = React.useState("first");

  return (
    <View>
      <Text style={styles.oppsText1}>
        Select the type of {"\n"} activities you would {"\n"} like to see:
      </Text>
      <View style={styles.buttons}>
        <Text style={styles.oppsText}>Indoor</Text>
        <RadioButton
          value="indoor"
          status={checked === "indoor" ? "checked" : "unchecked"}
          onPress={() => setChecked("indoor")}
          label="indoor"
          color="green"
        />
        <Text style={styles.oppsText}>Outdoor</Text>
        <RadioButton
          value="outdoor"
          status={checked === "outdoor" ? "checked" : "unchecked"}
          onPress={() => setChecked("outdoor")}
          label="outdoor"
          color="green"
        />
        <Text style={styles.oppsText}>Both</Text>
        <RadioButton
          value="third"
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
          label="third"
          color="green"
        />
      </View>
      <View style={styles.buttons}>
        <Text style={styles.oppsText}>Active</Text>
        <RadioButton
          value="active"
          status={checked === "active" ? "checked" : "unchecked"}
          onPress={() => setChecked("active")}
          label="active"
          color="green"
        />
        <Text style={styles.oppsText}>Relaxed</Text>
        <RadioButton
          value="relaxed"
          status={checked === "relaxed" ? "checked" : "unchecked"}
          onPress={() => setChecked("relaxed")}
          label="relaxed"
          color="green"
        />
        <Text style={styles.oppsText}>Both</Text>
        <RadioButton
          value="activeboth"
          status={checked === "activeboth" ? "checked" : "unchecked"}
          onPress={() => setChecked("activeboth")}
          label="activeboth"
          color="green"
        />
      </View>
      <View style={styles.buttons}>
        <Text style={styles.oppsText}>Social</Text>
        <RadioButton
          value="social"
          status={checked === "social" ? "checked" : "unchecked"}
          onPress={() => setChecked("social")}
          label="social"
          color="green"
        />
        <Text style={styles.oppsText}>Independent</Text>
        <RadioButton
          value="independent"
          status={checked === "independent" ? "checked" : "unchecked"}
          onPress={() => setChecked("independent")}
          label="independent"
          color="green"
        />
        <Text style={styles.oppsText}>Both</Text>
        <RadioButton
          value="socialboth"
          status={checked === "socialboth" ? "checked" : "unchecked"}
          onPress={() => setChecked("socialboth")}
          label="socialboth"
          color="green"
        />
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
    marginBottom: 90,
    marginLeft: 25,
    marginRight: 25,
  },
  oppsText: {
    color: "##3D5C43",
    fontWeight: "200",
    fontSize: 14,
    textAlign: "left",
    marginLeft: 20,
  },
  oppsText1: {
    color: "#3D5C43",
    fontWeight: "300",
    fontSize: 20,
    textAlign: "center",
    marginTop: 28,
    marginBottom: 50,
    marginLeft: 25,
    marginRight: 25,
  },
  rows: {
    justifyContent: "space-between",
    marginTop: 100,
  },
});
