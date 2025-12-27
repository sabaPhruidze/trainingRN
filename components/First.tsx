import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const First = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80",
        }}
        alt="It is an user icon with white and blue colors.In the center is a person's icon in white colors, outside it has blue and than white circle"
        style={styles.icon}
      />
    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#95e600ff",
  },
  icon: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
});
