export function loadingAction(load) {
  return {
    type: '@APP/CONNECTION/LOADING',
    payload: load
  }
}

export function loadingFullAction(load) {
  return {
    type: '@APP/CONNECTION/LOADING_FULL',
    payload: load
  }
}

export const clearConnection = () => {
  return dispatch => {
    dispatch({ type: '@APP/CONNECTION/CLEAR_STATE' })
  }
}
