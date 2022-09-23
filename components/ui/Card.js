import {StyleSheet, View, Text} from "react-native";
import Colors from "../../constants/colors";
import PrimaryButton from "./PrimaryButton";

function Card({instruction, lButtonText, lButtonHandler, rButtonText, rButtonHandler, children}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.instructionText}>{instruction}</Text>
      {children}
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={lButtonHandler}>{lButtonText}</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={rButtonHandler}>{rButtonText}</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 16,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    marginHorizontal: 24,
    width: 300,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.75,
    backgroundColor: Colors.primary800,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
  }
});