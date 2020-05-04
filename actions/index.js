export const ADD_DECK='ADD_DECK'
export const ADD_CARD = 'ADD_CARD'
export const QUIZ = 'QUIZ'

export function addDeck (deck){
    return {
        type: ADD_DECK,
        deck // deck : { title : "xxx", questions[{question: "xxx", answer: "zzzz"}]}
    }
}

export function addCard (deckId,card){
    return{
        type: ADD_CARD,
        deckId,
        card, // card : {question: "xxx", answer: "zzzzz"}
    }
}