import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [businesses, setBusinesses] = useState([]);

  const search = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term: query,
        location: "vancouver"
      }
    });

    setBusinesses(response.data.businesses);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={query => setQuery(query)}
        onQuerySubmit={() => search()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
