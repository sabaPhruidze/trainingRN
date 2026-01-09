import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

import { CompositeScreenProps } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { TabParamList } from "../navigation/TabNavigator";
import { RootStackParamList } from "../Main";

type Props = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, "Twelve">,
  NativeStackScreenProps<RootStackParamList>
>;

const Twelve = ({ navigation }: Props) => {
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Thirteen")}
      >
        <Text style={styles.btnText}>Next step</Text>
      </Pressable>
    </View>
  );
};

export default Twelve;

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 30,
    marginTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
  },
});
