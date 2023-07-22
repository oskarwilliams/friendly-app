import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";

import BaseView from "../layouts/BaseView";

const Settings = () => {
  return (
    <BaseView>
      <StatusBar style="auto" />
      <Text>Open up App.tsx to start working on your app!</Text>
    </BaseView>
  );
};

export default Settings;
