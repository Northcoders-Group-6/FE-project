import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const ExploreOpps = () => {
  const opps = [
    {
      img: "https://i.ytimg.com/vi/EjT3emte-CM/maxresdefault.jpg",
      opp: "Clean up on aisle 3",
      company: "Tesco",
      location: "Oxford Road",
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

  return opps.map((element) => {
    return (
      <View style={styles.oppsContainer} key={element.opp}>
        <Image
          source={{ uri: element.img }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.oppsText}>{element.opp}</Text>
        <Text style={styles.oppsText}>{element.company}</Text>
        <Text style={styles.oppsText}>{element.location}</Text>

        <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>See More</Text>
        </TouchableOpacity>
      </View>
    );
  });
};

export default ExploreOpps;

const styles = StyleSheet.create({
  oppsContainer: {
    // flex: 3,
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  oppsText: { color: "black", fontWeight: "700", fontSize: 16 },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#5D62CB",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#5D62CB",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#5D62CB",
    fontWeight: "700",
    fontSize: 16,
  },
});
