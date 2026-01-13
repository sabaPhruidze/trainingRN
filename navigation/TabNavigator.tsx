import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Seventh from "../components/Seventh";
import Twelve from "../components/Twelve";

export type TabParamList = {
  Seventh: undefined;
  Twelve: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Seventh"
        component={Seventh}
        options={{
          tabBarLabel: "List",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Twelve"
        component={Twelve}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
