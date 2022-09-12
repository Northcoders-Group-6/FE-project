import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import WhichUser from "./screens/WhichUser";
import StudentReg from "./screens/StudentReg";
import OrganiserReg from "./screens/OrganiserReg";
import MapScreen from "./screens/MapScreen";
import SingleOpp from "./screens/SingleOpp";

import CreateEvent from "./screens/CreateEvent";

import Settings from "./screens/Settings";
import VolunteerHistory from "./screens/VolunteerHistory";
import EditProfile from "./screens/EditProfile";

import { UserContext } from "./src/contexts/UserContext";
import { useState } from "react";
import TabNavigator from "./navigation/TabNavigator";
import Toast from "react-native-toast-message";

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
            <Stack.Screen name="Explore Opps" component={TabNavigator} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Single" component={SingleOpp} />

            <Stack.Screen name="Create Event" component={CreateEvent} />

            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen
              name="Volunteer History"
              component={VolunteerHistory}
            />
            <Stack.Screen name="Edit Profile" component={EditProfile} />

          </Stack.Navigator>
        </NavigationContainer>
        <Toast />
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
