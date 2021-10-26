import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

type User = {
  id: string;
  name: string;
}
type StateType = {
  data: User[]
}
type ActionType = {
  type: string;
  payload: User
}
const INITIAL_STATE: StateType = {
  data: [],
};

const userReducer = (state: StateType = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'users/fetch':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  users: userReducer,
  // products: productsReducer,
  // ui: uiReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
