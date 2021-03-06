// Combiner l'ensemble des reducers pour former un Store
import { combineReducers } from "redux";
import MessagesReducer from "./MessagesReducer";

// Combiner les Reducers en vue de créer un Store
// RootReducer constitue le reducer racine qui va être
// utiliser dans mon Store
const RootReducer = combineReducers({
  MessagesReducer
});

export default RootReducer;
