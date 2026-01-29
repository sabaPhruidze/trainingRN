import { Text, Pressable, Alert, Platform } from "react-native";
import React, { useEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Main";
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { SafeAreaView } from "react-native-safe-area-context";

type Props = NativeStackScreenProps<RootStackParamList, "Fifteen">;

// Notification handler - კომპონენტის გარეთ
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

const Fifteen = ({ navigation }: Props) => {
  
  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  // Permission-ის მოთხოვნა
  async function registerForPushNotificationsAsync() {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      
      if (finalStatus !== 'granted') {
        Alert.alert('Permission not granted', 'Failed to get push notification permissions');
        return;
      }
    } else {
      Alert.alert('Must use physical device for Push Notifications');
    }
  }

  const scheduleNotificationAsync = async () => {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Hi 👋',
          body: 'This is a local notification!',
          sound: true,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 2,
        },
      });
      Alert.alert('Success', 'Notification scheduled!');
    } catch (error) {
      console.error('Error scheduling notification:', error);
      Alert.alert('Error', 'Failed to schedule notification');
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Text className="text-2xl mb-5">Fifteen</Text>
      
      <Pressable 
        onPress={scheduleNotificationAsync}
        className="mt-10 w-[200px] h-[50px] bg-green-800 flex justify-center rounded-xl items-center"
      >
        <Text className="text-xl text-white font-extrabold">Ring the bell</Text>
      </Pressable>
      
      <Pressable
        className="mt-10 w-[200px] h-[50px] bg-black flex justify-center rounded-xl items-center"
        onPress={() => navigation.navigate("Sixteen")}
      >
        <Text className="text-xl text-white font-extrabold">Next step</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Fifteen;