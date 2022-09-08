import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const StudentReg = () => {
  return (
    <View>
      <TextInput>First Name</TextInput>
      <TextInput>Surname</TextInput>
    </View>
  );
};

export default StudentReg;

const styles = StyleSheet.create({});
