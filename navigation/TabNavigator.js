import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import ExploreOpps from "../screens/ExploreOpps";
import Activity from "../screens/Activity";
import Map from "../screens/Map";
import Settings from "../screens/Settings";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explore Opps"
      activeColor="white"
      inactiveColor="white"
      barStyle={{ backgroundColor: "#3D5C43" }}
    >
      <Tab.Screen
        name="Home"
        component={ExploreOpps}
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
        name="Map"
        component={Map}
        options={{
          tabBarShowLabel: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="earth" color={color} size={20} />
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

export default TabNavigator;
