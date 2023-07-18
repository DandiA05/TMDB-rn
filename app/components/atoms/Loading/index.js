import React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

import Text from '../Text'

import { Colors, Height, Width } from '@styles/index'

const LoadingFull = () => {
  return (
    <View
      style={{
        position: 'absolute',
        width: Width,
        height: Height,
        backgroundColor: Colors.BlackTransparent,
        zIndex: 99999999,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ActivityIndicator size={24} color={Colors.TextColor.Teks10} />
      <Text color={Colors.TextColor.Teks10} style={{ marginTop: 20 }}>
        Mohon Tunggu ...
      </Text>
    </View>
  )
}

export default LoadingFull
