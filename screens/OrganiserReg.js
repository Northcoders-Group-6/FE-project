import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import React, { useState } from "react";
import { Formik } from "formik";
import { db } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const OrganiserReg = () => {
  const navigation = useNavigation();
  const [newOrg, setNewOrg] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const OptomisticSubmit = () => {
    setSubmitted(!submitted);
  };

  return (
    <>
      <ScrollView style={{ marginHorizontal: 20 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.select({ android: undefined, ios: "padding" })}
          >
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
                  OptomisticSubmit();
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
                      keyboardType="numeric"
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
                    <TouchableOpacity>
                      <View style={styles.button}>
                        <Text
                          style={styles.buttonText}
                          title="Submit"
                          onPress={props.handleSubmit}
                        >
                          Submit
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </Formik>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View>
        {submitted === true && (
          <View>
            <Text>You have registered!</Text>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginText}>Go to login</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

export default OrganiserReg;

const styles = StyleSheet.create({
  input: {
    margin: 0,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    fontSize: 15,
    borderRadius: 6,
  },
  container: {
    marginTop: 40,
    flex: 1,
    flexDirection: "column",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#3D5C43",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },

  // loginButton: {
  //   backgroundColor: "#3D5C43",
  //   width: "40%",
  //   padding: 5,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   marginLeft: 50,
  //   marginRight: 50,
  // },
  // loginText: {
  //   color: "white",
  //   fontWeight: "700",
  //   fontSize: 16,
  // },
});
