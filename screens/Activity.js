import { LogBox, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../src/contexts/UserContext";
import { db } from "../firebase";
import { doc } from "firebase/firestore";
import { getDoc } from "firebase/firestore";
import { MyEventsContext } from "../src/contexts/MyEventsContext";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Activity = () => {
  let counter = 0;
  const navigation = useNavigation();

  const { loggedInUser } = useContext(UserContext);
  const { myEvents, setMyEvents } = useContext(MyEventsContext);
  useEffect(() => {
    loggedInUser.events.forEach((eventId) => {
      let colRef = doc(db, "events", eventId);
      let docRef = getDoc(colRef).then((res) => {
        setMyEvents((currEvents) => {
          return [...currEvents, res.data()];
        });
      });
    });
    
  }, [loggedInUser, counter]);

  return (
    <View>
      {myEvents.map((e) => {
        return (<Text>{e.date_time}</Text>);
      })}
      <TouchableOpacity
                  onPress={()=>{navigation.navigate("Activity")}}
                  style={[styles.button, styles.buttonOutline]}
                >
                  <Text style={styles.seeMore}>Refresh</Text>
                </TouchableOpacity>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({});
