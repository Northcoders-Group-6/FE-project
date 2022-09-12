import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Share,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/AntDesign";

const SingleOpp = () => {
  const navigation = useNavigation();
  const opps = [
    {
      img: "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80.jpeg",
      opp: "Food Bank Donation",
      company: "Green Veg Grocers",
      location: "Oxford Road, Manchester",
    },
  ];

  const sendToSignUpPage = () => {
    navigation.navigate("Sign Up");
  };

  return opps.map((element) => {
    return (
      <ScrollView>
        <View style={styles.oppsContainer} key={element.opp}>
          <Image
            source={{ uri: element.img }}
            style={{ width: 400, height: 250 }}
          />

          <Text style={styles.oppsText1}>{element.opp}</Text>
          <Text style={styles.oppsText}>{element.company}</Text>
          <Text style={styles.oppsText}>{element.location}</Text>
          <Text style={styles.oppsText2}>
            Join us in helping tackle food waste and donating food to those in
            need. We will need help with donations to make sure we provide the
            community with bags of food they can take away.
          </Text>
          <Text style={styles.text}>
            <Ionicons name="calendar" size={20} />
            From 10AM - 4PM Sat 8 Aug and Sun 9 Aug
          </Text>
          <Text style={styles.text}>
            <Ionicons name="team" size={20} />
            Up to 10 volunteers needed
          </Text>
          <Text style={styles.text}>
            <Ionicons name="gift" size={20} />
            Free meal vouchers next time you shop
          </Text>
          <TouchableOpacity
            onPress={sendToSignUpPage}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.seeMore}> Sign Up</Text>
          </TouchableOpacity>
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
    marginLeft: 5,
  },
  oppsText: {
    color: "#646464",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
    marginLeft: 5,
  },
  oppsText1: {
    color: "#3D5C43",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "left",
    marginTop: 12,
    marginBottom: 8,
    marginLeft: 6,
  },
  oppsText2: {
    color: "#3D5C43",
    fontWeight: "700",
    fontSize: 16,
    textAlign: "left",
    marginTop: 18,
    marginLeft: 5,
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
  text: {
    marginTop: 20,
    marginLeft: 10,
    color: "#646464",
    fontWeight: "700",
    fontSize: 14,
    textAlign: "left",
    marginTop: 20,
    marginLeft: 5,
  },
});
