import {StyleSheet, View} from "react-native";
import Title from "./Title";

function Root({title, children}) {
  return (
    <View style={styles.rootContainer}>
      <Title>{title}</Title>
      {children}
    </View>
  );
}

export default Root;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
});