const initialState = {
  isLoading: false,
  fullLoading: false
}
function data(state = initialState, action) {
  switch (action.type) {
    case '@APP/CONNECTION/LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case '@APP/CONNECTION/LOADING_FULL':
      return {
        ...state,
        fullLoading: action.payload
      }
    case '@APP/CONNECTION/CLEAR_STATE':
      return {
        ...state,
        isLoading: false,
        fullLoading: false
      }
  }
  return state
}

export default data
