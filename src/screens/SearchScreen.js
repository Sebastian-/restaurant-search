import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import PriceResultList from "../components/PriceResultList";

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

  const filterByPrice = price => {
    return businesses.filter(business => business.price === price);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        query={query}
        onQueryChange={query => setQuery(query)}
        onQuerySubmit={() => search()}
      />
      <ScrollView>
        <PriceResultList
          title={"Budget Eats"}
          businesses={filterByPrice("$")}
        />
        <PriceResultList title={"Average"} businesses={filterByPrice("$$")} />
        <PriceResultList
          title={"Gettin' Pricey"}
          businesses={filterByPrice("$$$")}
        />
        <PriceResultList
          title={"Once in a Blue Moon"}
          businesses={filterByPrice("$$$$")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SearchScreen;
