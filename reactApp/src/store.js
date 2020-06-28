// Imports: Dependencies
// import AsyncStorage from "@react-native-community/async-storage";
import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage";
import reduxthunk from "redux-thunk";

// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: "root",
  // Storage Method (React Native)
  //   storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["auth"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
  storage,
};
// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewareList = [reduxthunk, createLogger()];

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middlewareList))
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export { store, persistor };
