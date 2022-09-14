import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { auth, db } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../src/contexts/UserContext";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);

  const [volunteers, setVolunteers] = useState([]);
  const [isVolunteer, setIsVolunteer] = useState(false);

  const isOrg = (email) => {
    const colRef = collection(db, "Organizations");
    const q = query(colRef, where("email", "==", email));
    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const org = doc.data();
        org.docId = doc.id;
        setLoggedInUser(org);
      });
    });
  };

  const isVol = (email) => {
    const colRef = collection(db, "Volunteers");
    getDocs(colRef).then((snapshot) => {
      let volunteersAux = [];
      snapshot.docs.forEach((doc) => {
        userData = doc.data();
        userData.docId = doc.id;
        // console.log("uesrdata final", userData);
        // console.log("docID is here=", doc.id);
        volunteersAux.push({ ...userData });
      });
      setVolunteers(volunteersAux);

      const filteredUser = volunteersAux.filter((user) => {
        return user.email === email;
      });

      if (filteredUser.length !== 0) {
        setLoggedInUser(filteredUser[0]);

        navigation.replace("Explore Opps");
      } else {
        isOrg(email);
        navigation.replace("Org Events");
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedInUser(user.uid);
      }
    });
    return unsubscribe;
  }, []);

  const handleRegister = () => {
    navigation.navigate("Which User");
  };

  // const handleSignUp = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log("Registered with:", user.email);
  //     })
  //     .catch((error) => alert(error.message));
  // }; //THIS IS THE CODE FOR REGISTERING USERS TO FIREBASE

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with", user.email);
        isVol(user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ android: undefined, ios: "padding" })}
    >
      <View style={styles.image}>
        <Image
          source={require("./../assets/Untitled-1.png")}
          style={{ width: 296, height: 119 }}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleRegister}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    // marginTop: 50,
    width: "80%",
  },
  input: {
    backgroundColor: "#FFFFFB",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    color: "5D62CB",
  },
  image: {
    marginTop: 10,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#3D5C43",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#3D5C43",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#3D5C43",
    fontWeight: "700",
    fontSize: 16,
  },
  emailInput: {
    color: "#5D62CB",
    fontWeight: "600",
    fontSize: 16,
  },
  passwordInput: {
    color: "#5D62CB",
    fontWeight: "600",
    fontSize: 16,
  },
  textBelow: {
    marginTop: 40,
    color: "#3D5C43",
    fontSize: 16,
  },
});
