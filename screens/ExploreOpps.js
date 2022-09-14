import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  LogBox,
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
    eventsCol().then((querySnapshot) => {
      let eventAux = [];
      querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        // doc.data() is never undefined for query doc snapshots
        eventAux.push({ ...doc.data() });
      });
      setEventArr(eventAux);
    });
  }, []);

  // console.log(eventArr);

  const opps = [
    {
      img: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80.jpeg",
      opp: "Food Bank Donation",
      company: "Green Veg Grocers",
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

    {
      img: "https://i.ytimg.com/vi/EjT3emte-CM/maxresdefault.jpg",
      opp: "Read to kids3",
      company: "Library",
      location: "St Peters square",
    },
  ];

  const singleOpp = () => {
    navigation.navigate("Single");
  };

  return opps.map((element) => {
    return (
      <View style={styles.oppsContainer} key={element.opp}>
        <Image
          source={{ uri: element.img }}
          style={{ width: 450, height: 250 }}
        />
        <Text style={styles.text}></Text>
        <Text style={styles.oppsTextTitle}>{element.opp}</Text>
        <Text style={styles.oppsText}>{element.company}</Text>
        <Text style={styles.oppsText}>{element.location}</Text>
        <TouchableOpacity
          onPress={singleOpp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>
    );
  });
};

export default ExploreOpps;

const styles = StyleSheet.create({
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
    marginTop: 5,
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
    backgroundColor: "#3D5C43",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
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
