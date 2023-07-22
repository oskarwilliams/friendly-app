import {
  DrawerHeaderProps,
  DrawerToggleButton,
} from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View } from "react-native";

import { headerHeight } from "../constants";

const Header = (_: DrawerHeaderProps) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.emptyContainer}></Text>
      <Text style={styles.text}>FRIEND.LY</Text>
      <View style={styles.buttonContainer}>
        <DrawerToggleButton tintColor="white" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%",
    flex: 1,
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    height: headerHeight,
    paddingTop: 40,
    flexDirection: "row",
  },
  emptyContainer: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
