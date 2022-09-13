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
    getEmailFromUser().then(email => {
      const colRef = collection(db, "events");
      const events = query(colRef, where("email", "==", email));
      onSnapshot(events, snapshot => {
        let eventAux = [];
        snapshot.docs.forEach(doc => {
          eventAux.push({ ...doc.data() });
        });
        setEventArr(eventAux);
      });
    });
  }, [loggedInUser]);

  const singleEventClick = () => {
    navigation.navigate("Org Single Event");
  };

  const clickCreateEvent = () => {
    navigation.navigate("Create Event");
  };

  return (
    <>
      <Text>Your Events</Text>
      <TouchableOpacity
        onPress={clickCreateEvent}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text>Create a new event</Text>
      </TouchableOpacity>
      {opps.map(element => {
        return (
          <View style={styles.oppsContainer} key={element.opp}>
            <Image
              source={{ uri: element.img }}
              style={{ width: 450, height: 250 }}
            />

            <Text style={styles.oppsText}>{element.opp}</Text>
            <Text style={styles.oppsText}>{element.company}</Text>
            <Text style={styles.oppsText}>{element.location}</Text>
            <TouchableOpacity
              onPress={singleEventClick}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.seeMore}>See More</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </>
  );
};

export default OrgYourEvents;

const styles = StyleSheet.create({
  oppsContainer: {
    textAlign: "left",
    paddingBottom: 30,
    paddingTop: 30,
    flexDirection: "column",
    textAlign: "left",
  },
  oppsHeaderText: {
    fontSize: 30,
  },
  oppsText: {
    color: "#6D326D",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
    paddingBottom: 5,
    marginLeft: 8,
    lineHeight: 20,
  },
  oppsTextTitle: {
    color: "#6D326D",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "left",
    marginTop: 20,
    marginBottom: 8,
    marginLeft: 8,
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#6D326D",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "#6D326D",
    marginTop: 20,
    borderColor: "#6D326D",
    alignItems: "center",
    marginBottom: 40,
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
