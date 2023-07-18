import { GoogleSignin } from '@react-native-google-signin/google-signin'
import { clearConnection, loadingFullAction } from './Connection'
import { store } from '@store/index'
import messaging from '@react-native-firebase/messaging'

export function logoutAction() {
  return async dispatch => {
    const session = store.getState().dataProfile.dataProfile

    messaging()
      .unsubscribeFromTopic('user-' + session.uuid)
      .then(() => console.log('Unsubscribe to user-' + session.uuid + '!'))

    if (session.google) {
      await GoogleSignin.revokeAccess()
      await GoogleSignin.signOut()
    }

    dispatch({ type: '@APP/LOG_OUT' })
    dispatch({ type: '@APP/PROFILE/CLEAR' })
    dispatch({ type: '@APP/REGISTER/CLEAR' })
  }
}
