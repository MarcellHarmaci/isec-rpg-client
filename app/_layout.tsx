import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import '../firebaseConfig';
import "../global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer >
        <Drawer.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Drawer.Screen
          name="players"
          options={{
            title: 'Players',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
