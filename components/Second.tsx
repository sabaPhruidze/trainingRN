import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Second = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[styles.box, toggle ? styles.toggleLight : styles.toggleDark]}
      >
        <Text>saba</Text>
      </View>
    </SafeAreaView>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
  },
  toggleLight: {
    backgroundColor: "#002afeff",
  },
  toggleDark: {
    backgroundColor: "#090471ff",
  },
});
