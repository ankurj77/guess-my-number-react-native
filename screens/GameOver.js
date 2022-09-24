import Root from "../components/ui/Root";
import PrimaryButton from "../components/ui/PrimaryButton";
import {View} from "react-native";
import Typography from "../components/ui/Typography";

function GameOver({replayHandler, numRounds, userNumber}) {
  return (
    <Root title={"Game Over!"}>
      <View>
        <Typography>No. of rounds: {numRounds}</Typography>
      </View>
      <View>
        <Typography>Number entered: {userNumber}</Typography>
      </View>
      <PrimaryButton onPress={replayHandler}>Start New Game</PrimaryButton>
    </Root>
  );
}

export default GameOver;