import {Text, StyleSheet} from "react-native";
import Colors from "../../constants/colors";

function Typography({children}) {
  return <Text style={styles.typeface}>{children}</Text>;
}

export default Typography;

const styles = StyleSheet.create({
  typeface: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: "white",
    textAlign: "justify",
    padding: 12,
  }
});