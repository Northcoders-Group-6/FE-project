import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SingleOpp = () => {
  return (
    <View style={styles.container}>
      <Text>SinglePage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  oppsContainer: {
    // flex: 3,
    width: "60%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SingleOpp;
