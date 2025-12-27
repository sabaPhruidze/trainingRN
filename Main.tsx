import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";

export type RootStackParamList = {
  First: undefined;
  Second: undefined;
  Third: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
        <Stack.Screen name="Third" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
