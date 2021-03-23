const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const ScoreSchema = new Schema({
  player1Name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  player1Name: {
    type: String,
    required: true,
  },
  player2Name: {
    type: String,
    required: true,
  },
  player1Score: {
    type: Number,
    required: true,
  },
  player2Score: {
    type: Number,
    required: true,
  },
  winDifference: {
    type: Number,
    required: true,
  },
  currentWinner: {
    type: String,
    required: true,
  },
});

module.exports = Score = mongoose.model("score", ScoreSchema);
