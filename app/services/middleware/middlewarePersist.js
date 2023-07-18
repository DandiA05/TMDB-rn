import React, { useState, useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { View } from 'react-native'

import { Splash } from '@templates/index'

const PersistGate = ({ children, persistor }) => {
  const [rehydrated, setRehydrated] = useState(false)
  const [initiated, setInitiated] = useState(true)

  useEffect(() => {
    rehydrate()
  }, [])

  const rehydrate = () => {
    setRehydrated(true)
    setTimeout(() => {
      SplashScreen.hide()
    }, 300)
  }

  return (
    <View style={{ flex: 1 }}>
      {rehydrated && initiated ? children : <Splash />}
    </View>
  )
}

export default PersistGate
