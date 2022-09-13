import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { React, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../src/contexts/UserContext";
import { useContext } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const OrgYourEvents = () => {
  const { loggedInUser } = useContext(UserContext);
  const opps = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNvVfEuJEvQyLbZygLwxhqLTjyc_Z4Ngg-w&usqp=CAU",
      opp: "Food Bank Donation",
      company: "Unicorn",
      location: "Oxford Road, Manchester",
    },
    {
      img: "https://i.ytimg.com/vi/EjT3emte-CM/maxresdefault.jpg",
      opp: "Tree planting",
      company: "Plant a tree",
      location: "Chorlton",
    },
    {
      img: "https://i.ytimg.com/vi/EjT3emte-CM/maxresdefault.jpg",
      opp: "Read to kids",
      company: "Library",
      location: "St Peters square",
    },
  ];

  const [eventArr, setEventArr] = useState([]);

  useEffect(() => {
    const getEmailFromUser = async () => {
      let orgEmail = await loggedInUser.email;
      return orgEmail;
    };
    getEmailFromUser().then((email) => {
      const colRef = collection(db, "events");
      const events = query(colRef, where("email", "==", email));
      onSnapshot(events, (snapshot) => {
        let eventAux = [];
        snapshot.docs.forEach((doc) => {
          eventAux.push({ ...doc.data() });
        });
        setEventArr(eventAux);
      });
    });
  }, [loggedInUser]);

  return eventArr.map((element) => {
    return (
      <View style={styles.oppsContainer} key={element.event_title}>
        <Image
          source={{ uri: element.image }}
          style={{ width: 400, height: 200 }}
        />

        <Text style={styles.oppsText}>{element.event_title}</Text>
        <Text style={styles.oppsText}>{element.company}</Text>
        <Text style={styles.oppsText}>{element.location}</Text>
        <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>
    );
  });
};

export default OrgYourEvents;

const styles = StyleSheet.create({
  oppsContainer: {
    paddingBottom: 30,
    paddingTop: 30,
    width: "100%",
    flexDirection: "column",
    textAlign: "left",
    marginLeft: 5,
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
    marginTop: 40,
  },
  button: {
    backgroundColor: "#3D5C43",
    width: "80%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
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
  seeMore: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
