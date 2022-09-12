import { db } from "../firebase";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import Toast, { ErrorToast } from "react-native-toast-message";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const volunteerSchema = yup.object({
  firstName: yup.string().required().min(2).max(20),
  surname: yup.string().required().min(2).max(20),
  studentId: yup
    .string()
    .required()
    .min(5, "Must be exactly 5 values")
    .max(5, "Must be exactly 5 values"),
  location: yup.string().required().min(2),
  phone: yup
    .string()
    .required("Phone is required field")
    .matches(phoneRegExp, "Phone number is not valid")
    .min(10, "to short")
    .max(10, "to long"),
  email: yup.string().required().email("Please enter a valid email"),
  password: yup.string().required().min(8),
});

const StudentReg = () => {
  const navigation = useNavigation();
  const successToast = () => {
    Toast.show({
      type: "success",
      text1: "You Successfully register!",
      text2: "Please login",
      visibilityTime: 5000,
      autoHide: true,
      onShow: () => {
        navigation.replace("Login");
      },
      onHide: () => {},
    });
  };
  const errorToast = err => {
    Toast.show({
      type: "error",
      text1: `Something goes wrong: ${err}`,
      text2: "Try Again",
      visibilityTime: 5000,
      autoHide: false,
      onShow: () => {},
      onHide: () => {},
    });
  };
  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.select({ android: undefined, ios: "padding" })}
        >
          <View style={styles.buttonContainer}>
            <Formik
              initialValues={{
                userType: "vol",
                firstName: "",
                surname: "",
                studentId: "",
                location: "",
                phone: "",
                email: "",
                password: "",
              }}
              validationSchema={volunteerSchema}
              onSubmit={(values, actions) => {
                console.log(values);
                actions.resetForm();
                db.collection("Volunteers")
                  .add(values)
                  .then(() => successToast())
                  .catch(err => errorToast(err));
              }}
            >
              {props => (
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    onChangeText={props.handleChange("firstName")}
                    onBlur={props.handleBlur("firstName")}
                    value={props.values.firstName}
                  />
                  {/* only if the left value is a valid string, will the right value be displayed */}
                  <Text style={styles.errorText}>
                    {props.touched.firstName && props.errors.firstName}
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Surname"
                    onChangeText={props.handleChange("surname")}
                    onBlur={props.handleBlur("surname")}
                    value={props.values.surname}
                  />
                  <Text style={styles.errorText}>
                    {props.touched.surname && props.errors.surname}
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Student ID number"
                    onChangeText={props.handleChange("studentId")}
                    onBlur={props.handleBlur("studentId")}
                    value={props.values.studentId}
                    keyboardType="numeric"
                  />
                  <Text style={styles.errorText}>
                    {props.touched.studentId && props.errors.studentId}
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Location"
                    onChangeText={props.handleChange("location")}
                    onBlur={props.handleBlur("location")}
                    value={props.values.location}
                  />
                  <Text style={styles.errorText}>
                    {props.touched.location && props.errors.location}
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Phone"
                    onChangeText={props.handleChange("phone")}
                    onBlur={props.handleBlur("phone")}
                    value={props.values.phone}
                    keyboardType="numeric"
                  />
                  <Text style={styles.errorText}>
                    {props.touched.phone && props.errors.phone}
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={props.handleChange("email")}
                    onBlur={props.handleBlur("email")}
                    value={props.values.email}
                  />
                  <Text style={styles.errorText}>
                    {props.touched.email && props.errors.email}
                  </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={props.handleChange("password")}
                    onBlur={props.handleBlur("password")}
                    value={props.values.password}
                    secureTextEntry
                  />
                  <Text style={styles.errorText}>
                    {props.touched.password && props.errors.password}
                  </Text>
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
    </ScrollView>
  );
};

export default StudentReg;

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
    backgroundColor: "#5D62CB",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
  errorText: {
    color: "#5D62CB",
    fontWeight: "bold",
    marginBottom: 2,
    marginTop: 2,
    margin: 0,
    textAlign: "center",
  },
});
