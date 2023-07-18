import React from 'react'
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs
} from '@react-navigation/stack'
import { store } from '@storage/index'
const { dispatch } = store

import { clearConnection } from '@actions/Connection'

//Stack Screens
import { Login, Main } from '@pages/index'

const Stack = createStackNavigator()

const routes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenListeners={{
        state: e => {
          // Do something with the state
          dispatch(clearConnection())

          console.log('')
          console.log('======== NAVIGATE ========')
          console.log(JSON.stringify(e.data.state.routes, null, 2))
          console.log('==========================')
          console.log('')
        }
      }}
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <Stack.Screen name={'Login'} component={Login} />
      <Stack.Screen name={'Main'} component={Main} />
    </Stack.Navigator>
  )
}

export default routes
