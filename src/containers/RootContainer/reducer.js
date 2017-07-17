
const initialState = {
  users: [],
  selectedUser: {}
}

export default  (state = initialState, action) => {
    console.log("state: " + state)
  switch (action.type) {
  case 'SET_USERS':
    return {...state, users: action.users, selectedUser: action.users[0]}
  case 'SWITCH_USER':
    return {...state, selectedUser: state.users.find( user =>  user._id === action.payload.userId)}

  default:
    return state
  }
}


export const setUsers = (users) => {
  return {
    type: 'SET_USERS',
    users: users
  }
};


export const switchSelectedUser = (userId) => {
  return {
    type: 'SWITCH_USER',
    payload: {userId}
  }
};
