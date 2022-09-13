import React from "react";
import { Share, View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ShareTab = () => {
  const shareData = async () => {
    try {
      await Share.share({
        message: "Share this opportunity:",
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 10 }}>
      <TouchableOpacity
        onPress={shareData}
        style={[styles.button, styles.buttonOutline]}
      >
        <Text style={styles.signUp}> Share </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShareTab;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3D5C43",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    marginLeft: 105,
  },
  buttonOutline: {
    backgroundColor: "#3D5C43",
    marginTop: 20,
    borderColor: "#3D5C43",
    borderWidth: 2,
    alignItems: "center",
  },

  buttonOutlineText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    alignItems: "center",
  },
  signUp: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
