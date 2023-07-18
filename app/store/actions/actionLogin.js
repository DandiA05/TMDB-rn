export function forgotPassword(data) {
  return {
    type: '@APP/FORGOT_PASSWORD',
    payload: data
  }
}

export function loginCount(data) {
  return {
    type: '@APP/LOGIN_COUNT',
    payload: data
  }
}
