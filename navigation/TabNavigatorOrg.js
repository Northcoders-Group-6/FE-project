import React from "react";
import OrgYourEvents from "../screens/OrgYourEvents";
import Activity from "../screens/Activity";
import CreateEvent from "../screens/CreateEvent";
import Settings from "../screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const TabNavigatorOrg = () => {
  return (
    <Tab.Navigator
      initialRouteName="Org Events"
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: "#6D326D" }}
    >
      <Tab.Screen
        name="Home"
        component={OrgYourEvents}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Create Event"
        component={CreateEvent}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-add-circle-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigatorOrg;
