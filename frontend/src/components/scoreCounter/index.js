import React from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../redux/gameData/actions";
import { Button } from "antd";
import "./scoreCounter.css";
function ScoreCounter() {
  const dispatch = useDispatch();
  const { gameDetails } = useSelector((state) => state.gameData);
  const handleGameWin = (values) => {
    dispatch(actions.setGameDetails(values));
  };
  const submitGame = () => {
    dispatch(actions.postGameData(gameDetails));
  };
  return (
    <div className="scoreTrackingContainer">
      <div className="nameWrapper">
        <h2>{gameDetails.player1Name}</h2>
        <Button
          type="primary"
          onClick={() =>
            handleGameWin({
              player1Score: gameDetails.player1Score + 1,
            })
          }
        >
          Win + 1
        </Button>
      </div>
      <div className="scoreWrapper">
        <h3>Wins : </h3>
        <h1>{gameDetails.player1Score}</h1>
      </div>
      <div className="nameWrapper">
        <h2>{gameDetails.player2Name}</h2>
        <Button
          type="primary"
          onClick={() =>
            handleGameWin({
              player2Score: gameDetails.player2Score + 1,
            })
          }
        >
          Win + 1
        </Button>
      </div>
      <div className="scoreWrapper">
        <h3>Wins : </h3>
        <h1>{gameDetails.player2Score}</h1>
      </div>
      <hr />
      <div className="scoreInfoContainer">
        <div className="scoreInfoLine">
          <p>Current Winner : </p>
          <p>{gameDetails.currentWinner}</p>
        </div>
        <div className="scoreInfoLine">
          <p>winDifference : </p>
          <p>{gameDetails.winDifference}</p>
        </div>
        <Button type="primary" onClick={() => submitGame()}>
          Save Game
        </Button>
      </div>
    </div>
  );
}

export default ScoreCounter;
