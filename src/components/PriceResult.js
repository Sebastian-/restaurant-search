import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const PriceResult = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: business.image_url }} />
      <Text style={styles.name}>{business.name}</Text>
      <Text>{`${business.rating} stars (${business.review_count} ratings)`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 12
  },
  name: {
    fontWeight: "bold"
  },
  image: {
    width: 200,
    height: 100,
    borderRadius: 4
  }
});

export default PriceResult;
