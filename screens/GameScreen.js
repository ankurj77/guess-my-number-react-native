import {Alert} from "react-native";
import {useEffect, useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import Root from "../components/ui/Root";
import Card from "../components/ui/Card";

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

  useEffect(() => {
    console.log("onChange called. (guess, number) => ", currentGuess, userNumber);
    if (currentGuess == userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

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
    </Root>
  );
}

export default GameScreen;