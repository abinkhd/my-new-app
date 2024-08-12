import React from 'react'
import { ADD, BUY } from './BookAction'
import { SELL } from './BookAction'

const initialState={
    NumberOfBooks:20,
    Books:[]
}


const BookReducer = (state=initialState,action) => {
  switch(action.type){
    case BUY: return{...state,NumberOfBooks:state.NumberOfBooks+action.payload}
    case SELL: return{...state,NumberOfBooks:state.NumberOfBooks-action.payload}
    case  ADD:return{...state,Books:[...state.Books,action.payload]}
    default: return state
  }
}

export default BookReducer