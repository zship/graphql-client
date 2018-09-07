const initialState = {
  requestInProgress: false,
  characterList: [],
}

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case 'request_starting':
      return Object.assign({}, state, {
        requestInProgress: true,
      })
    case 'request_finished':
      return Object.assign({}, state, {
        characterList: action.response,
        requestInProgress: false,
      })
    default:
      return state
  }
}

export default reducer
