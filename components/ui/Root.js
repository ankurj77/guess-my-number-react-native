import {StyleSheet, ScrollView, KeyboardAvoidingView, View} from "react-native";
import Title from "./Title";

function Root({title, children}) {
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={styles.rootContainer}>
          <Title>{title}</Title>
          {children}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default Root;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
});