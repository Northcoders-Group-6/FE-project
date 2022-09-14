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
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../src/contexts/UserContext";

const CreateEvent = () => {
  const [newEvent, setNewEvent] = useState({});
  const { loggedInUser } = useContext(UserContext);
  const navigation = useNavigation();

  // console.log("here email", loggedInUser.email);
  // console.log("here compnay", loggedInUser.compnay_name);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ android: undefined, ios: "padding" })}
    >
      <Text style={styles.title1}>Create a new event</Text>
      <View style={styles.buttonContainer}>
        <Formik
          initialValues={{
            event_title: "",
            description: "",
            location: "",
            date_time: "",
            location: "",
            number_of_vols: 0,
            treats: "",
            image: "",
          }}
          onSubmit={(values, actions) => {
            values.company = loggedInUser.company_name;
            values.email = loggedInUser.email;
            values.users = [];
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
  title1: {
    fontSize: 24,
    color: "#4D4B4B",
    fontWeight: "500",
    textAlign: "center",
  },

  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 5,
    fontSize: 16,
    borderRadius: 6,
    marginBottom: 10,
    marginTop: 10,
  },

  oppsText: {
    color: "#3D5C43",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignSelf: "center",
  },

  button: {
    backgroundColor: "#6D326D",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    color: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
