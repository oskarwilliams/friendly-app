import { useWindowDimensions, StyleSheet, View, ViewProps } from "react-native";

import { headerHeight } from "../constants";

const BaseView = (props: ViewProps) => {
  const dimensions = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      height: dimensions.height - headerHeight,
    },
  });

  return <View {...props} style={props.style ?? styles.container} />;
};

export default BaseView;
