import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const ExploreOpps = () => {
  const opps = [
    {
      img: "https://i.ytimg.com/vi/EjT3emte-CM/maxresdefault.jpg",
      opp: "clean up on isle 3",
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
      </View>
    );
  });
};

export default ExploreOpps;

const styles = StyleSheet.create({
  oppsContainer: {
    // flex: 3,
    borderColor: `#000000`,
    borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  oppsText: { color: "black", fontWeight: "700", fontSize: 16 },
});
