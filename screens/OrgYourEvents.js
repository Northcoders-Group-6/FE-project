import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";

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
import Ionicons from "react-native-vector-icons/AntDesign";

const OrgYourEvents = () => {
  const { loggedInUser } = useContext(UserContext);
  const navigation = useNavigation();

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
      company: "Library Corner",
      location: "St Peters square, Manchester",
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

  const singleEventClick = () => {
    navigation.navigate("Org Single Event");
  };

  const clickCreateEvent = () => {
    navigation.navigate("Create Event");
  };

  return (
    <>
      <ScrollView>
        <View>
          <Text style={styles.title}>Your Events</Text>
          <TouchableOpacity
            onPress={clickCreateEvent}
            style={[styles.createNewButton]}
          ></TouchableOpacity>
          {opps.map((element) => {
            return (
              <View style={styles.oppsContainer} key={element.opp}>
                <Image
                  source={{ uri: element.img }}
                  style={{ width: 450, height: 250 }}
                />

                <Text style={styles.oppsText1}>{element.opp}</Text>
                <Text style={styles.oppsText}>{element.company}</Text>
                <Text style={styles.oppsText}>{element.location}</Text>
                <TouchableOpacity
                  onPress={singleEventClick}
                  style={[styles.button, styles.buttonOutline]}
                >
                  <Text style={styles.seeMore}>
                    <Ionicons name="edit" size={20} style={styles.iconStyle} />{" "}
                    Edit Event
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
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
  title: {
    fontSize: 20,
    color: "#4D4B4B",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
  },

  oppsText1: {
    fontSize: 20,
    color: "#4D4B4B",
    fontWeight: "500",
    marginLeft: 8,
    marginTop: 20,
  },
  oppsText: {
    color: "#4D4B4B",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",

    marginLeft: 10,
    lineHeight: 20,
  },

  buttonContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#6D326D",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  buttonOutline: {
    backgroundColor: "#6D326D",
    marginTop: 20,
    borderColor: "#6D326D",
    alignItems: "center",
    marginBottom: 1,
  },
  seeMore: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
