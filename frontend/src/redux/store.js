import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem("persistantState", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// load string from localStarage and convert into an Object
// invalid output must be undefined
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("persistantState");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
// const store = createStore(rootReducers, loadFromLocalStorage());

// listen for store changes and use saveToLocalStorage to
// save them to localStorage

// export default store;-----------------

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const store = createStore(rootReducer, bindMiddleware(middlewares));
sagaMiddleware.run(rootSaga);
// store.subscribe(() => saveToLocalStorage(store.getState()));
export { store };
