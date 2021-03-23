import actions from "./actions";

const initialState = {
  gameDetails: {
    player1Name: "",
    player2Name: "",
    player1Score: 0,
    player2Score: 0,
    winDifference: 0,
    currentWinner: "None",
    dateTimeStamp: new Date().toISOString(),
  },
  error: false,
  loading: false,
};

export default function Employees(state = initialState, action) {
  switch (action.type) {
    case actions.POST_GAMEDATA:
      return {
        ...state,
        loading: true,
        gameDetails: action.payload,
      };
    case actions.POST_GAMEDATA_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case actions.POST_GAMEDATA_FAILED:
      return {
        ...state,
        error: "error",
        loading: false,
      };
    case actions.SET_GAMEDETAILS:
      const gameDetails = { ...state.gameDetails, ...action.payload };
      gameDetails.currentWinner =
        gameDetails.player1Score > gameDetails.player2Score
          ? gameDetails.player1Name
          : gameDetails.player1Score === gameDetails.player2Score
          ? "None"
          : gameDetails.player2Name;
      gameDetails.winDifference = Math.abs(
        gameDetails.player1Score - gameDetails.player2Score
      );
      return {
        ...state,
        gameDetails: gameDetails,
      };

    default:
      return state;
  }
}
