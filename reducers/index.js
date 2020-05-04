import { ADD_DECK, ADD_CARD } from "../actions/index";

export default function decks(state={decks:{
    "deck 1":{
        title: "deck 1"
    }
}}, action) {
  switch (action.type) {
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
