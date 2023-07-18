const initialState = {
  state: {},
  dataPassword: {},
  loginCount: 0
}
const data = (state = initialState, action) => {
  switch (action.type) {
    case '@APP/LOG_OUT':
      return {
        ...state,
        state: {}
      }
    case '@APP/FORGOT_PASSWORD':
      return {
        ...state,
        dataPassword: action.payload
      }
    case '@APP/LOGIN_COUNT':
      return {
        ...state,
        loginCount: action.payload
      }
  }
  return state
}

export default data
