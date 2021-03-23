import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import { message } from "antd";
import { postGameDataReq } from "./requets";
import actions from "./actions";

export function* postGameData() {
  yield takeEvery(actions.POST_GAMEDATA, function* ({ payload }) {
    try {
      const response = yield call(postGameDataReq, payload);
      console.log(response);
      if (Object.keys(response.data).length !== 0) {
        yield put({
          type: actions.POST_GAMEDATA_SUCCESS,
          payload: response,
        });
        message.success("Game data saved to server");
      } else {
        yield put({
          type: actions.POST_GAMEDATA_FAILED,
          payload: "Error Occured",
        });
        message.error("Sorry! Something went wrong");
      }
    } catch (error) {
      console.log(error);
      yield put({
        type: actions.POST_GAMEDATA_FAILED,
        payload: "Error Occured",
      });
      message.error("Sorry! Something went wrong");
    }
  });
}

export default function* rootSaga() {
  yield all([fork(postGameData)]);
}
