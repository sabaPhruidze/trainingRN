import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";

type Props = NativeStackScreenProps<RootStackParamList, "Fourteen">;

const Fourteen = ({ navigation }: Props) => {
  return (
    <View>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Fifteen")}
      >
        <Text style={styles.btnText}>Next step</Text>
      </Pressable>
    </View>
  );
};

export default Fourteen;

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
