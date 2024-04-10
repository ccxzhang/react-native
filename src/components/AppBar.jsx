import { View, StyleSheet, Text, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: Constants.statusBarHeight,
    backgroundColor: "black",
    width: "100%",
    justifyContent: "space-between",
  },
  Text: {
    color: "#FFF",
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = ({ name }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.Text}>{name}</Text>
    </View>
  );
};

export default AppBar;
