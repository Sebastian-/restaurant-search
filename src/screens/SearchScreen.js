import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [query, setQuery] = useState("");

  return (
    <View>
      <SearchBar query={query} onQueryChange={query => setQuery(query)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
