import { all } from "redux-saga/effects";
import gameDataSaga from "./gameData/sagas";

export default function* rootSaga(getState) {
  yield all([gameDataSaga()]);
}
