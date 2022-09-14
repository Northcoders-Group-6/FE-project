import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  LogBox,
  ScrollView,
} from "react-native";
import React from "react";
import { db } from "../firebase";
import { useNavigation } from "@react-navigation/native";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../src/contexts/UserContext";
import Ionicons from "react-native-vector-icons/AntDesign";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  snapshotEqual,
  where,
} from "firebase/firestore";

const ExploreOpps = () => {
  const { loggedInUser } = useContext(UserContext);
  const navigation = useNavigation();

  const [eventArr, setEventArr] = useState([]);

  const eventsCol = async () => {
    const querySnapshot = await getDocs(collection(db, "events"));
    return querySnapshot;
  };

  useEffect(() => {
    let eventAux = [];
    eventsCol().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
         
        // doc.data() is never undefined for query doc snapshots
        eventAux.push({ ...doc.data(), doc_id: doc.id });
      });
      setEventArr(eventAux);
    });
  }, [loggedInUser]);
  
  
  // console.log(eventArr);
  const singleOpp = (id) => {
    navigation.navigate("Single", {id});
  };

  return (
    <>
      <ScrollView>
        <View>
          <Text style={styles.title1}>Your Local Opportunities</Text>

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
                  onPress={()=>{singleOpp(element.doc_id)}}
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

export default ExploreOpps;

const styles = StyleSheet.create({
  title1: {
    fontSize: 20,
    color: "#4D4B4B",
    fontWeight: "500",
    textAlign: "center",
    marginTop: 20,
  },
  oppsContainer: {
    textAlign: "left",
    paddingBottom: 30,
    paddingTop: 30,
    flexDirection: "column",
    textAlign: "left",
  },
  oppsText: {
    color: "#4D4B4B",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
    marginLeft: 8,
    lineHeight: 20,
  },

  buttonContainer: {
    width: "80%",
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
    backgroundColor: "#3D5C43",
    marginTop: 10,
    borderColor: "#3D5C43",
    alignItems: "center",
    marginBottom: 1,
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
