import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import routes from './routes'
import { LoadingFull } from '@atoms/index'
import { useSelector } from 'react-redux'
// import { PushController } from '@molecules/index'

const AppNavigator = routes

const IndexLayout = () => {
  const connection = useSelector(state => state.connection)

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigator />
        {connection?.fullLoading && <LoadingFull />}
        {/* <PushController /> */}
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default IndexLayout
