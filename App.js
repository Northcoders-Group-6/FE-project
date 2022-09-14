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
import SignUp from "./screens/SignUp";
import OrgYourEvents from "./screens/OrgYourEvents";
import ExploreOpps from "./screens/ExploreOpps";

import OrgSingleEvent from "./screens/OrgSingleEvent";

import CreateEvent from "./screens/CreateEvent";
import Settings from "./screens/Settings";
import VolunteerHistory from "./screens/VolunteerHistory";
import SetPreferences from "./screens/SetPreferences";
import { UserContext } from "./src/contexts/UserContext";
import { useState } from "react";
import TabNavigator from "./navigation/TabNavigator";
import Toast from "react-native-toast-message";
import TabNavigatorOrg from "./navigation/TabNavigatorOrg";
import OrgEventConfirmation from "./screens/OrgEventConfirmation";
const Stack = createNativeStackNavigator();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);

  return (
    <>
      <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Single" component={SingleOpp} /> */}
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
            <Stack.Screen name="Sign Up" component={SignUp} />
            <Stack.Screen name="Create Event" component={CreateEvent} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Set Preferences" component={SetPreferences} />


            <Stack.Screen name="Org Single Event" component={OrgSingleEvent} />


            <Stack.Screen name="Org Events" component={TabNavigatorOrg} />
            <Stack.Screen
              name="Event Confirmation"
              component={OrgEventConfirmation}
            />

            <Stack.Screen
              name="Volunteer History"
              component={VolunteerHistory}
            />
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
