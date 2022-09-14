import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation= useNavigation()
  const goBack = ()=>{
    setTimeout(()=>{
      navigation.navigate("Explore Opps")
    }, 5000);
  }
  const [fontsLoaded] = useFonts({
    "Rubik-Regular": require("./../assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <Image
        source={require("./../assets/screenshot.png")}
        style={{ width: 410, height: 250 }}
      />
      <View style={styles.text}>
        <Text style={{ fontFamily: "Rubik-Regular", fontSize: 36 }}>
          You're all signed up {"\n"}and set to go!
          {goBack()}
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    marginTop: 40,
    marginLeft: 40,
  },
});
