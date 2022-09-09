import { db } from "../firebase";

import { Formik } from "formik";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const StudentReg = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.select({ android: undefined, ios: "padding" })}
      >
        <View style={styles.buttonContainer}>
          <Formik
            initialValues={{
              firstName: "",
              surname: "",
              studentId: "",
              location: "",
              email: "",
              phone: "",
              password: "",
              userType: "vol",
            }}
            onSubmit={(values, actions) => {
              console.log(values);
              db.collection("Volunteers").add(values);
              actions.resetForm();
            }}
          >
            {props => (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="First Name"
                  onChangeText={props.handleChange("firstName")}
                  value={props.values.firstName}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Surname"
                  onChangeText={props.handleChange("surname")}
                  value={props.values.surname}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Student ID number"
                  onChangeText={props.handleChange("studentId")}
                  value={props.values.studentId}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Location"
                  onChangeText={props.handleChange("location")}
                  value={props.values.location}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone"
                  onChangeText={props.handleChange("phone")}
                  value={props.values.phone}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                />
                <TouchableOpacity>
                  <Button
                    style={styles.button}
                    title="Submit"
                    onPress={props.handleSubmit}
                  />
                </TouchableOpacity>
                <Text>
                  By signing up I agreee to Voluntreat's terms of service and
                  privacy policy
                </Text>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default StudentReg;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
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
