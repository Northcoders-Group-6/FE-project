import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { React, useContext } from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../src/contexts/UserContext";
import { db } from "../firebase";
const HomeScreen = () => {
  const navigation = useNavigation();
  const { loggedInUser } = useContext(UserContext);

  let currUser = auth.currentUser?.uid;
  let student = db.collection("Volunteers");
  const doc = student.where("firstName", "==", "stan");
  // let org = db.collection("organisers").doc(currUser);
  // const orgdoc = await org.get()

  // console.log("org", orgdoc.data());

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Text>Email:{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#5D62CB",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#5D62CB",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
