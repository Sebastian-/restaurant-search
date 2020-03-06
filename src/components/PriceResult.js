import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const PriceResult = ({ business }) => {
  const navigation = useNavigation();

  const showDetail = businessId => {
    navigation.navigate("Detail", { id: businessId });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => showDetail(business.id)}>
        <Image style={styles.image} source={{ uri: business.image_url }} />
        <Text style={styles.name}>{business.name}</Text>
        <Text>{`${business.rating} stars (${business.review_count} ratings)`}</Text>
      </TouchableOpacity>
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
