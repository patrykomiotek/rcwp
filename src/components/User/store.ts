export type User = {
  id: string;
  name: string;
}
export type StateType = {
  data: User[]
}
type ActionType = {
  type: string;
  payload: User
}
const INITIAL_STATE: StateType = {
  data: [{id: "2", name: "Jan"}],
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

export { userReducer };
