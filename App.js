import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import WhichUser from "./screens/WhichUser";
import StudentReg from "./screens/StudentReg";
import OrganiserReg from "./screens/OrganiserReg";
import ExploreOpps from "./screens/ExploreOpps";
import MapScreen from "./screens/MapScreen";
import SingleOpp from "./screens/SingleOpp";
import { UserContext } from "./src/contexts/UserContext";
import { useContext, useState } from "react";
import TabNavigator from "./navigation/TabNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedInUser, setloggedInUser] = useState([]);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setloggedInUser }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Which User" component={WhichUser} />
            <Stack.Screen name="Student Reg" component={StudentReg} />
            <Stack.Screen name="Organiser Reg" component={OrganiserReg} />
            <Stack.Screen name="Explore" component={ExploreOpps} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Single" component={SingleOpp} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
