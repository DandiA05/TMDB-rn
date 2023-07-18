import React, { useState } from 'react'
import { View } from 'react-native'
import { MenuIcon } from '@images'
import { Colors, horizontalScale, verticalScale, Width } from '@styles'

const Header = ({
  fullContainer = false,
  alignItems,
  justifyContent,
  background = Colors.Background,
  alignTitle,
  opacity = 1,
  title = <View />,
  leftIcon = <View />,
  rightIcon = <View />
}) => {
  return (
    <View
      style={{
        // borderWidth: 1,
        backgroundColor: Colors.rgbaConverter(background, opacity),
        position: fullContainer ? 'absolute' : 'relative',
        justifyContent: 'center',
        width: Width,
        height: horizontalScale(95),
        paddingVertical: verticalScale(16),
        paddingHorizontal: horizontalScale(16),
        zIndex: 10
      }}>
      <View
        style={{
          // borderWidth: 1,
          position: 'absolute',
          width: '100%',
          bottom: 16,
          marginHorizontal: horizontalScale(16)
        }}>
        <View
          style={{
            // borderWidth: 1,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20
          }}>
          {leftIcon}
        </View>
        <View
          style={{
            // borderWidth: 1,
            minHeight: horizontalScale(24),
            marginLeft: alignTitle,
            alignItems: alignItems,
            justifyContent: justifyContent
          }}>
          {title}
        </View>
        <View
          style={{
            // borderWidth: 1,
            right: 0,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 20
          }}>
          {rightIcon}
        </View>
      </View>
    </View>
  )
}

export default Header
