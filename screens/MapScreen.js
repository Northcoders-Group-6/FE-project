import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { View, StyleSheet, Dimensions } from "react-native";
// import { useNavigation } from "@react-navigation/native";

const Map = ({ navigation }) => {
  const initialRegion = {
    latitude: 53.483959,
    longitude: -2.244644,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const markers = [
    { latitude: 53.481938, longitude: -2.216858 },
    { latitude: 53.434104, longitude: -2.14476 },
    { latitude: 53.441467, longitude: -2.37616 },
    { latitude: 53.533391, longitude: -2.229218 },
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
          {markers.map((location, index) => {
            return (
              <Marker
                key={index}
                coordinate={location}
                pinColor={"purple"}
                title="opportunity one"
                description="company name"
                onPress={() => navigation.navigate("Single")}
              />
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
});

export default Map;
