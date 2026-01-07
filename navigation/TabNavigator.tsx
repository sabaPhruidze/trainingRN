import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import First from "../components/First";
import Seventh from "../components/Seventh";
import Twelve from "../components/Twelve";

export type TabParamList = {
  First: undefined;
  Seventh: undefined;
  Twelve: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tab.Screen name="First" component={First} />
      <Tab.Screen name="Twelve" component={Twelve} />
      <Tab.Screen name="Seventh" component={Seventh} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
