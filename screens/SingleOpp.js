import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { db } from "../firebase";
import { useContext, useState, useEffect } from "react";
import ShareTab from "../navigation/ShareTab";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/AntDesign";
import {
  collection,
  getDoc,
  onSnapshot,
  query,
  snapshotEqual,
  where,
  doc,
  updateDoc,
  increment,
} from "firebase/firestore";

const SingleOpp = () => {
  const navigation = useNavigation();

  const [eventArr, setEventArr] = useState([]);
  // const [volNumber, setVolNumber] = useState([]);

  const eventsCol = async () => {
    const docRef = doc(db, "events", "JfZ4g9LLLPABO7NqNztA");
    const docSnap = await getDoc(docRef);
    return docSnap;
  };

  useEffect(() => {
    eventsCol()
      .then((docSnap) => {
        setEventArr(docSnap.data());
      })
      .then(() => {
        setVolNumber(eventArr.number_of_vols);
      });
  }, []);

  console.log(eventArr);
  // console.log(volNumber);

  const opps = [
    {
      img: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80.jpeg",
      opp: "Food Bank Donation",
      company: "Mustard Tree",
      location: "Ancoats, Manchester",
    },
  ];

  const handleSignUp = async () => {
    const volNumbers = doc(db, "events", "JfZ4g9LLLPABO7NqNztA");

    updateDoc(volNumbers, {
      number_of_vols: increment(-1),
    });
  };

  const sendToSignUpPage = () => {
    navigation.navigate("Sign Up");
    // newVols = number_of_vols"
    handleSignUp();
  };

  return opps.map((element) => {
    return (
      <ScrollView key={element.opp}>
        <View style={styles.oppsContainer}>
          <Image
            source={{ uri: element.img }}
            style={{ width: 450, height: 250 }}
          />
          <Text style={styles.oppsTextTitle}>{element.opp}</Text>
          <Text style={styles.oppsText}>{element.company}</Text>
          <View
            style={{
              borderBottomColor: "#646464",
              paddingBottom: 15,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          >
            <Text style={styles.oppsText}>{element.location}</Text>
          </View>
          <Text style={styles.descriptionText}> Description</Text>
          <Text style={styles.oppsTextDescription}>
            Join us in helping tackle food waste and donating food to those in
            need. We will need help with donations to make sure we provide the
            community with bags of donations they can take away. We will also
            provide free food on the day and a free meal voucher next time you
            shop to say thank you for your hard work.
          </Text>

          <Text style={styles.organiserName}>Organiser: Anne Matthews</Text>

          <Text style={styles.text}>
            <Ionicons name="calendar" size={22} /> From 10AM - 4PM Sat 8 Aug and
            Sun 9 Aug
          </Text>
          <Text style={styles.text}>
            <Ionicons name="team" size={22} /> Up to 10 volunteers needed
          </Text>
          <Text style={styles.text}>
            <Ionicons name="gift" size={22} /> Free meal vouchers next time you
            shop
          </Text>

          <TouchableOpacity
            onPress={sendToSignUpPage}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.signUp}> Sign Up</Text>
          </TouchableOpacity>
          <ShareTab />
        </View>
      </ScrollView>
    );
  });
};

export default SingleOpp;

const styles = StyleSheet.create({
  oppsContainer: {
    paddingBottom: 30,
    paddingTop: 30,
    width: "100%",
    flexDirection: "column",
    textAlign: "left",
  },
  oppsText: {
    color: "#4D4B4B",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
    paddingBottom: 5,
    marginLeft: 8,
    lineHeight: 20,
  },
  oppsTextTitle: {
    color: "#3D5C43",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 8,
  },
  oppsTextDescription: {
    color: "#3D5C43",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
    marginTop: 18,
    marginLeft: 10,
    lineHeight: 24,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#3D5C43",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonOutline: {
    backgroundColor: "#3D5C43",
    marginTop: 20,
    borderColor: "#3D5C43",
    borderWidth: 2,
    alignItems: "center",
  },

  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    alignItems: "center",
  },
  signUp: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  text: {
    marginTop: 20,
    color: "#4D4B4B",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
    marginTop: 20,
    marginLeft: 8,
  },
  hairlineWidth: {
    padding: 30,
  },
  descriptionText: {
    color: "#4D4B4B",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
    paddingTop: 10,
    marginLeft: 8,
  },
  organiserName: {
    marginTop: 20,
    marginLeft: 10,
    color: "#4D4B4B",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
    marginTop: 15,
    marginLeft: 8,
  },
});
