import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <EvilIcons name="search" style={styles.icon} />
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  },
  input: {
    flex: 1,
    fontSize: 30,
    height: 30
  },
  container: {
    height: 50,
    borderRadius: 6,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center"
  }
});

export default SearchBar;
