import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrgEventConfirmation = () => {
  return (
    <View>
      <Text style={styles.title}>Your event has been confirmed!</Text>
    </View>
  );
};

export default OrgEventConfirmation;

const styles = StyleSheet.create({
  title: {
    color: "#6D326D",
  },
});
