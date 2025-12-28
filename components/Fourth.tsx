import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
export const hobbiesData = [
  { id: 1, title: "Programming" },
  { id: 2, title: "Working out" },
  { id: 3, title: "Reading books" },
  { id: 4, title: "Photography" },
  { id: 5, title: "Traveling" },
  { id: 6, title: "Listening to music" },
  { id: 7, title: "Drawing" },
  { id: 8, title: "Cooking" },
  { id: 9, title: "Learning languages" },
  { id: 10, title: "Chess" },
  { id: 11, title: "Watching movies" },
  { id: 12, title: "Gaming" },
  { id: 13, title: "Gardening" },
  { id: 14, title: "Swimming" },
  { id: 15, title: "Blogging" },
] as const;

const Fourth = () => {
  return (
    <FlatList
      data={hobbiesData}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Text style={styles.text}>{item.title} </Text>
        </View>
      )}
    />
  );
};

export default Fourth;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginLeft: 5,
    backgroundColor: "#b10a0aff",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#ffffffff",
  },
});
