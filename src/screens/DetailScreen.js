import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import yelp from "../api/yelp";

const DetailScreen = ({ route }) => {
  const { id } = route.params;
  const [business, setBusiness] = useState([]);

  const search = async () => {
    const response = await yelp.get(`/${id}`);
    setBusiness(response.data);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{business.name}</Text>
      <ScrollView horizontal>
        {business.photos &&
          business.photos.map(imgSrc => (
            <Image style={styles.img} source={{ uri: imgSrc }} />
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold"
  },
  img: {
    width: 200,
    height: 100,
    borderRadius: 4,
    margin: 12
  }
});

export default DetailScreen;
