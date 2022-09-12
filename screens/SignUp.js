import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SignUp = () => {
  return (
    <View>
      <Text style={styles.text}>You're all signed up and set to go! 👍</Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    fontSize: 72,
  },
});
