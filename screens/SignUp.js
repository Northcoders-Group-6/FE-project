import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const SignUp = () => {
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("./../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.text}>
      <Text style={{ fontFamily: "Rubik-Regular", fontSize: 36 }}>
        You're all signed up {"\n"}and set to go!
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    marginTop: 400,
    marginLeft: 40,
  },
});
