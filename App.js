import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import RepositoryList from "./src/components/RepositoryItem";

const App = () => {
  return (
    <View>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;
