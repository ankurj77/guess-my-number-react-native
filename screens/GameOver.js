import Root from "../components/ui/Root";
import Card from "../components/ui/Card";

function GameOver({replayHandler, exitHandler}) {
  return (
    <Root title={"Game Over!"}>
      <Card
        instruction={"Computer Guessed!"}
        lButtonText={"Replay"}
        rButtonText={"Exit"}
        lButtonHandler={replayHandler}
        rButtonHandler={exitHandler}
      />
    </Root>
  );
}

export default GameOver;