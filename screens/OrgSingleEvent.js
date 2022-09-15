import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import ShareTab from "../navigation/ShareTab";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/AntDesign";
import { getDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const OrgSingleEvent = ({ route }) => {
  const [eventdoc, setEventId] = useState(route.params.eventId);
  const navigation = useNavigation();
  const [event, setEvent] = useState({});
  const [usersExist, setUserExist] = useState(false);

  const eventsCol = async () => {
    const docRef = doc(db, "events", eventdoc);
    const docSnap = await getDoc(docRef);
    return docSnap;
  };

  useEffect(() => {
    eventsCol()
      .then((docSnap) => {
        let eventU = docSnap.data();
        setEvent(docSnap.data());
        return eventU;
      })
      .then((eventU) => {
        if (eventU.users.length >= 1) {
          setUserExist(true);
        }
      });
  }, [eventdoc]);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "events", eventdoc));
    navigation.navigate("Org Events");
  };

  return (
    <ScrollView>
      <View>
        <View style={styles.oppsContainer} key={event.event_title}>
          <Text style={styles.oppsTextTitle}>{event.event_title}</Text>

          <Text style={styles.oppsText}>{event.location}</Text>
        </View>

        <Text style={styles.oppsTextDescription}>
          Number of attendees: {event.number_of_vols}
        </Text>

        <Text>Attendees info:</Text>
        {usersExist === false && <Text>No event attendees yet</Text>}
        {usersExist &&
          event.users.map((element) => {
            return (
              <View style={styles.oppsContainer} key={element.docId}>
                <Text>
                  Name: {element.firstName} {element.lastName}
                </Text>
                <Text>email: {element.email} </Text>
                <Text>phone number: {element.phone} </Text>
              </View>
            );
          })}

        <Text style={styles.text}>
          <Ionicons name="calendar" size={20} />
          {event.date_time}
        </Text>
        <Text style={styles.text}>
          <Ionicons name="team" size={20} />- Up to 10 volunteers needed
        </Text>

        <TouchableOpacity
          onPress={handleDelete}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.delete}> Delete Event</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.delete}> Delete Event</Text>
        </TouchableOpacity> */}
        <ShareTab />
      </View>
    </ScrollView>
  );
};

export default OrgSingleEvent;

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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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
  delete: {
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
