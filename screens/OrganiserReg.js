import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { db } from "../firebase";

const OrganiserReg = () => {
  const [newOrg, setNewOrg] = useState({});

  return (
    <View style={styles.buttonContainer}>
      <Formik
        initialValues={{
          company_name: "",
          company_reg_number: "",
          company_type: "",
          location: "",
          contact_name: "",
          email: "",
          phone: "",
          password: "",
          userType: "org",
        }}
        onSubmit={(values, actions) => {
          setNewOrg(values);
          db.collection("organizations").add(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              placeholder="Company Name"
              style={styles.input}
              onChangeText={props.handleChange("company_name")}
              value={props.values.company_name}
            />
            <TextInput
              placeholder="Company Registration Number"
              style={styles.input}
              onChangeText={props.handleChange("company_reg_number")}
              value={props.values.company_reg_number}
            />
            <TextInput
              placeholder="Company Type"
              style={styles.input}
              onChangeText={props.handleChange("company_type")}
              value={props.values.company_type}
            />
            <TextInput
              placeholder="Location"
              style={styles.input}
              onChangeText={props.handleChange("location")}
              value={props.values.location}
            />
            <TextInput
              placeholder="Contact Name"
              style={styles.input}
              onChangeText={props.handleChange("contact_name")}
              value={props.values.contact_name}
            />
            <TextInput
              placeholder="Email Address"
              style={styles.input}
              onChangeText={props.handleChange("email")}
              value={props.values.email}
            />
            <TextInput
              placeholder="Telephone"
              style={styles.input}
              onChangeText={props.handleChange("phone")}
              value={props.values.phone}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              onChangeText={props.handleChange("password")}
              value={props.values.password}
            />
            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            ></Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default OrganiserReg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  inputContainer: {
    width: "80%",
  },
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
