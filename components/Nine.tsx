import { View, Text } from "react-native";
import React from "react";
import { RootStackParamList } from "../Main";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList, "Nine">;
const Nine = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Nine</Text>
    </View>
  );
};

export default Nine;
