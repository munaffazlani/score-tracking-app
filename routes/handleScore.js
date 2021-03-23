var express = require("express");
var router = express.Router();

//items module
const Score = require("../models/scoreData");

/* GET users listing. */
router.post("/", function (req, res, next) {
  console.log(req.body);
  const {
    player1Name,
    player2Name,
    player1Score,
    player2Score,
    winDifference,
    currentWinner,
  } = req.body;
  console.log(
    player1Name,
    player2Name,
    player1Score,
    player2Score,
    winDifference,
    currentWinner
  );
  const newScore = new Score({
    player1Name: player1Name,
    player2Name: player2Name,
    player1Score: player1Score,
    player2Score: player2Score,
    winDifference: winDifference,
    currentWinner: currentWinner,
  });
  newScore
    .save()
    .then((data) => res.json(data))
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

module.exports = router;
