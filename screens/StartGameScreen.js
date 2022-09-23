import {TextInput, StyleSheet, Alert, Text} from 'react-native';
import {useState} from "react";
import Colors from "../constants/colors";
import Root from "../components/ui/Root";
import Card from "../components/ui/Card";

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler() {
    setEnteredNumber('');
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Has to be a number in range [1, 99]", [
        {text: 'Okay', style: 'destructive', onPress: resetInputHandler}
      ]);
      return;
    }
    onPickNumber(enteredNumber);
  }

  return (
    <Root title={"Guess My Number Game"}>
      <Card
        instruction={"Enter your number"}
        lButtonText={"Reset"}
        rButtonText={"Confirm"}
        lButtonHandler={resetInputHandler}
        rButtonHandler={confirmInputHandler}
      >
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType={'number-pad'}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
      </Card>
    </Root>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  numberInput: {
    height: 60,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: "center"
  },
});