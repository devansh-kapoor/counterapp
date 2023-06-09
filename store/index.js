import { createStore } from 'redux'
import { combineReducers } from 'redux';

const initialState = {
  count: 0
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
   counter: reducer
  });

const store = createStore(rootReducer)

export default store
