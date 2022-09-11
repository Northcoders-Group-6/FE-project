import React from "react";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { View, StyleSheet, Dimensions } from "react-native";

const Map = () => {
  const initialRegion = {
    latitude: 53.483959,
    longitude: -2.244644,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
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
        <Marker coordinate={{ latitude: 53.483959, longitude: -2.244644 }} />
      </MapView>
    </View>
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
