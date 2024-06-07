import { View, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import { Link } from "react-router-native";

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
    padding: 10
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text style={styles.Text}>Repositories</Text>
        </Link>
        <Link to="/signin">
          <Text style={styles.Text}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
