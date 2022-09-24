import {Alert, StyleSheet, FlatList, View} from "react-native";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import Root from "../components/ui/Root";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
  console.log("random generator called. (min, max, exclude) => ", min, max, exclude);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, randomNum);
  } else {
    return randomNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const guessRoundsListLength = guessRounds.length;

  useEffect(() => {
    console.log("onChange called. (guess, number) => ", currentGuess, userNumber);
    if (currentGuess == userNumber) {
      onGameOver(guessRoundsListLength);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    setGuessRounds([initialGuess]);
  }, []);

  function nextGuessHandler(direction) {
    if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)) {
      Alert.alert("Don't lie!", "You know that is wrong...", [{text: "Sorry!", style: "cancel"}]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    let nextGuess = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(nextGuess);
    setGuessRounds(prevState => [nextGuess, ...prevState]);
  }

  function goLowerHandler() {
    nextGuessHandler("lower");
  }

  function goHigherHandler() {
    nextGuessHandler("higher");
  }

  return (
    <Root title={"Opponent's Guess"}>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card
        instruction={"Compare with yours!"}
        lButtonText={"goLower"}
        rButtonText={"goHigher"}
        lButtonHandler={goLowerHandler}
        rButtonHandler={goHigherHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => <GuessLogItem
            guess={itemData.item}
            roundNumber={guessRoundsListLength - itemData.index}
          />}
          keyExtractor={(item => item)}
        />
      </View>
    </Root>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    borderTopColor: 'black',
    borderTopWidth: 2,
    marginTop: 5,
    padding: 5,
  }
});