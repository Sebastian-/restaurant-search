import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PriceResult from "./PriceResult";

const PriceResultList = ({ title, businesses }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <FlatList
        keyExtractor={business => business.id}
        showsHorizontalScrollIndicator={false}
        data={businesses}
        renderItem={({ item }) => <PriceResult business={item} />}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8
  },
  container: {
    marginHorizontal: 12
  }
});

export default PriceResultList;
