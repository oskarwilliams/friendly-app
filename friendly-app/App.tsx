import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { ImageBackground } from "react-native";

import Header from "./components/navigation/Header";
import Friends from "./components/pages/Friends";
import Settings from "./components/pages/Settings";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/splash.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <NavigationContainer theme={navTheme}>
        <Drawer.Navigator
          initialRouteName="Friends"
          screenOptions={{
            headerStyle: { backgroundColor: "transparent" },
            header: Header,
            drawerActiveTintColor: "#FFF",
            drawerInactiveTintColor: "#FFF",
            drawerPosition: "right",
            drawerStyle: { backgroundColor: "rgba(0,0,0,0.7)" },
          }}
        >
          <Drawer.Screen name="Friend list" component={Friends} />
          <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}
