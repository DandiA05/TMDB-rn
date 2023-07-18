import { AuthSatellite, Satellite } from '../satellite'

export default function AuthMiddleware({ getState, dispatch }) {
  return next => action => {
    const returnValue = next(action)
    const state = getState()

    console.log('')
    console.log('')
    console.log('===========================')
    console.log('SATETTEEE MIDLLEWARE =>', state)
    console.log('===========================')
    console.log('')
    console.log('')

    if (state?.dataProfile?.dataProfile?.tokenSession) {
      const token = state?.dataProfile?.dataProfile?.tokenSession
      Satellite.defaults.headers.common.Authorization = `Bearer ${token}`
      Satellite.defaults.headers.common.authToken = `${token}`
    } else {
      delete Satellite.defaults.headers.common.Authorization
    }

    return returnValue
  }
}
