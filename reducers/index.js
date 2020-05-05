import { ADD_DECK, ADD_CARD, GET_ALL_DECKS } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_ALL_DECKS:
      console.log("decks",JSON.stringify(action.decks))
      return {
        ...state,decks:{
          ...action.decks
        }
      };
    case ADD_DECK:
      return {
        ...state,
        decks: {
          ...state.decks,
          ...action.deck,
        },
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
