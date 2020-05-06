import { ADD_DECK, ADD_CARD, GET_ALL_DECKS, DELETE_DECK } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_ALL_DECKS:
      console.log("decks", JSON.stringify(action.decks));
      return {
        ...state,
        decks: { ...action.decks },
      };
    case ADD_DECK:
      console.log("the action:", JSON.stringify(action.deck));
      const deck = { ...action.deck };
      return {
        ...state,
        ["decks"]: { ...state.decks, ...action.deck },
      };
    case DELETE_DECK:
      const newState = state
      delete newState.decks[action.deckId]
      return {
        ...newState,
      };
    case ADD_CARD:
      return {
        ...state,
        ...state.decks,
        [action.deck]: {
          ...state.decks[action.deckId],
          questions: {
            ...state.decks[action.deckId].questions.push({
              question: action.card.question,
              answer: action.card.answer,
            }),
          },
        },
      };
    default:
      return state;
  }
}
