import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { db } from "../firebase";
import { UserContext } from "../src/contexts/UserContext";

const CreateEvent = () => {
  const [newEvent, setNewEvent] = useState({});
  const { loggedInUser } = useContext(UserContext);

  // console.log("here email", loggedInUser.email);
  // console.log("here compnay", loggedInUser.compnay_name);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ android: undefined, ios: "padding" })}
    >
      <View style={styles.buttonContainer}>
        <Formik
          initialValues={{
            event_title: "",
            description: "",
            location: "",
            date_time: "",
            location: "",
            number_of_vols: "",
            treats: "",
            image: "",
          }}
          onSubmit={(values, actions) => {
            values.company = loggedInUser.company_name;
            values.email = loggedInUser.email;
            values.users = []
            setNewEvent(values);
            db.collection("events").add(values);
            actions.resetForm();
            navigation.navigate("Event Confirmation");
          }}
        >
          {(props) => (
            <View>
              <TextInput
                placeholder="Event Title"
                style={styles.input}
                onChangeText={props.handleChange("event_title")}
                value={props.values.event_title}
              />
              {/* <TextInput
                placeholder="Company"
                style={styles.input}
                onChangeText={props.handleChange("company")}
                value={props.values.company}
              /> */}
              <TextInput
                placeholder="Description"
                style={styles.input}
                onChangeText={props.handleChange("description")}
                value={props.values.description}
              />
              <TextInput
                placeholder="Location"
                style={styles.input}
                onChangeText={props.handleChange("location")}
                value={props.values.location}
              />
              <TextInput
                placeholder="Date and Time"
                style={styles.input}
                onChangeText={props.handleChange("date_time")}
                value={props.values.date_time}
              />

              <TextInput
                placeholder="Number of Volunteers"
                style={styles.input}
                onChangeText={props.handleChange("number_of_vols")}
                value={props.values.number_of_vols}
                keyboardType="numeric"
              />
              <TextInput
                placeholder="Treats"
                style={styles.input}
                onChangeText={props.handleChange("treats")}
                value={props.values.treats}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={props.handleSubmit}
              >
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CreateEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 10,
  },

  oppsText: {
    color: "#3D5C43",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
    marginTop: 8,
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#3D5C43",
    width: "100%",
    padding: 20,
    borderRadius: 25,
    alignItems: "center",
    color: "white",
  },

  buttonText: {
    color: "white",
  },
});
