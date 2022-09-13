import React from "react";
import MapView from "react-native-maps";
import { Marker, Callout } from "react-native-maps";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Map = () => {
  const navigation = useNavigation();
  const initialRegion = {
    latitude: 53.483959,
    longitude: -2.244644,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markers = [
    {
      eventTitle: "Ready to Kids",
      date: "Monday 3rd October",
      location: { latitude: 53.481938, longitude: -2.216858 },
    },
    {
      eventTitle: "Food bank",
      date: "Monday 3rd October",
      location: { latitude: 53.434104, longitude: -2.14476 },
    },
    {
      eventTitle: "Ready to Kids",
      date: "Monday 3rd October",
      location: { latitude: 53.441467, longitude: -2.37616 },
    },
    {
      eventTitle: "Clean the park",
      date: "Monday 3rd October",
      location: { latitude: 53.533391, longitude: -2.229218 },
    },
  ];

  return (
    <>
      <View style={styles.body}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 53.483959,
            longitude: -2.244644,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {markers.map((marker, index) => {
            console.log(marker.location);
            return (
              <Marker
                key={index}
                coordinate={marker.location}
                pinColor={"purple"}
              >
                <Callout tooltip onPress={() => navigation.replace("Single")}>
                  <View style={styles.bubble}>
                    <View>
                      <Text style={styles.bubbleText}>
                        Event: {marker.eventTitle}
                      </Text>

                      <Text style={styles.secondText}>Date: {marker.date}</Text>
                    </View>
                  </View>
                </Callout>
              </Marker>
            );
          })}
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bubble: {
    borderWidth: 2,
    borderRadius: 6,
    borderColor: "#ff7f50",
    backgroundColor: `#f8f8ff`,
    padding: 5,
    marginBottom: 5,
    width: 150,
  },
  bubbleText: {
    fontWeight: "bold",
    color: "#000000",
  },
  secondText: { color: "#000000" },
});

export default Map;
