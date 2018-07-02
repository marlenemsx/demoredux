import {
  MESSAGES_LIST,
  MESSAGES_REMOVE,
  MESSAGES_ADD,
  MESSAGES_ENABLE
} from "../constants";

// State initial pour le Reducers des messagges
const initialState = {
  messages: [
    { id: 1, content: "Mon Premier Message" },
    { id: 2, content: "Mon Second Message" },
    { id: 3, content: "Mon Troisième Message" }
  ]
};

// Reducer =  State + Action

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGES_LIST:
      return initialState;

    case MESSAGES_ADD:
      const addMessages = [
        ...state.messages,
        { id: state.messages.length + 1, content: action.text }
      ];
      return { messages: addMessages };

    case MESSAGES_ENABLE:
      const tab = state.messages;
      const index = state.messages.findIndex(elt => elt.id === action.id);
      tab[index].enabled = true;
      console.log(tab);
      return { messages: tab };

    case MESSAGES_REMOVE:
      const messages = state.messages.filter(elt => elt.id !== action.id);
      return { messages };

    default:
      return { messages: [] };
  }
};