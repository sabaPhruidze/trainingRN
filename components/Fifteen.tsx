import React, { useEffect } from "react";
import { Alert, Platform, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Notifications from "expo-notifications";

// 1) Handler — რომ notification გამოჩნდეს foreground-ში
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function Fifteen() {
  useEffect(() => {
    initLocalNotifications();
  }, []);

  // 2) Permission + Android Channel
  async function initLocalNotifications() {
    try {
      if (Platform.OS === "android") {
        await Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
        });
      }

      const { status } = await Notifications.getPermissionsAsync();
      if (status !== "granted") {
        const req = await Notifications.requestPermissionsAsync();
        if (req.status !== "granted") {
          Alert.alert("Permission", "ნოტიფიკაციების ნებართვა არ არის ჩართული.");
          return;
        }
      }
    } catch (e) {
      console.log("initLocalNotifications error:", e);
      Alert.alert("Error", "Notifications init error");
    }
  }

  // 3) ღილაკზე დაჭერა → მყისიერი LOCAL notification
  async function sendLocalNotification() {
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "Hi 👋",
          body: "ეს არის ლოკალური შეტყობინება",
          sound: true,
        },
        trigger: null, // მყისიერად
      });
    } catch (e) {
      console.log("sendLocalNotification error:", e);
      Alert.alert("Error", "Notification ვერ გაიგზავნა");
    }
  }

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Local Notification Test
      </Text>

      <Pressable
        onPress={sendLocalNotification}
        style={{
          width: 220,
          height: 50,
          backgroundColor: "#166534",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "800" }}>
          Ring the bell
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
