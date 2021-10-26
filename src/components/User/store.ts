export type User = {
  id: string;
  name: string;
}
export type StateType = {
  data: User[]
  isError: boolean;
  isLoading: boolean;
}
type ActionType = {
  type: string;
  payload: User
}
const INITIAL_STATE: StateType = {
  data: [],
  isError: false,
  isLoading: false,
};

export function asyncFetchUsers() {
  // The `extraArgument` is the third arg for thunk functions
  // return (dispatch, getState, api) => {
  return (dispatch: any) => {
    // you can use api here
    dispatch({ type: 'users/fetchRequested' });

    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'users/fetchSuccess', payload: data.results.map((elem: any) => ({
          id: elem.login.uuid,
          name: elem.name.first
        }))
      });
    })
    .catch(() => dispatch('users/fetchFailed'))
  }
}

const userReducer = (state: StateType = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'users/fetchRequested':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'users/fetchSuccess':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      } // state.set('isLoading', false)
    // state.merge('isLoading', false)
    case 'users/fetchFailed':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    case 'users/fetch':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state;
  }
}

export { userReducer };
