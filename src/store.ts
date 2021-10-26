import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { userReducer } from 'components/User/store';
import type { StateType as UsersType } from 'components/User/store';

export type Store = {
  users: UsersType
}

export const store = configureStore({
  reducer: {
    users: userReducer,
  }
});

// const rootReducer = combineReducers({
//   users: userReducer,
//   // products: productsReducer,
//   // ui: uiReducer,
// });

// const middleware = [thunk];
// const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
// export const store = createStore(
//   rootReducer, /* preloadedState, */ composeEnhancers(
//     applyMiddleware(...middleware)
//   )
// );


