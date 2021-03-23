const actions = {
  SET_GAMEDETAILS: "SET_GAMEDETAILS",
  SET_GAMEDETAILS_SUCCESS: "SET_GAMEDETAILS_SUCCESS",
  SET_GAMEDETAILS_FAILED: "SET_GAMEDETAILS_FAILED",
  POST_GAMEDATA: "POST_GAMEDATA",
  POST_GAMEDATA_SUCCESS: "POST_GAMEDATA_SUCCESS",
  POST_GAMEDATA_FAILED: "POST_GAMEDATA_FAILED",

  postGameData: (payload) => ({
    type: actions.POST_GAMEDATA,
    payload,
  }),
  setGameDetails: (payload) => ({
    type: actions.SET_GAMEDETAILS,
    payload,
  }),
};
export default actions;
