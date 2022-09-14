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

const OrgYourEvents = () => {
  const { loggedInUser } = useContext(UserContext);
  const navigation = useNavigation();

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
          let eventWithId = doc.data();
          eventWithId.docId = doc.id;
          eventAux.push({ ...eventWithId });
        });
        setEventArr(eventAux);
      });
    });
  }, [loggedInUser]);

  // console.log("Here are the events", eventArr);

  const singleEventClick = (docId) => {
    navigation.navigate("Org Single Event", { eventId: docId });
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
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.seeMore}>Create a new event</Text>
          </TouchableOpacity>
          {eventArr.map((element) => {
            return (
              <View style={styles.oppsContainer} key={element.event_title}>
                <Image
                  source={{ uri: element.image }}
                  style={{ width: 450, height: 250 }}
                />

                <Text style={styles.oppsText}>{element.event_title}</Text>
                <Text style={styles.oppsText}>{element.company}</Text>
                <Text style={styles.oppsText}>{element.location}</Text>
                <TouchableOpacity
                  onPress={() => singleEventClick(element.docId)}
                  style={[styles.button, styles.buttonOutline]}
                >
                  <Text style={styles.seeMore}>See More</Text>
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
    paddingTop: 30,
    paddingBottom: 15,
    fontSize: 24,
    color: "#4D4B4B",
    fontWeight: "500",
    textAlign: "center",
  },
  oppsText: {
    color: "#6D326D",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
    paddingBottom: 10,
    marginLeft: 8,
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
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignSelf: "center",
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
