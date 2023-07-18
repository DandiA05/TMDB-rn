import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { Animated, View } from 'react-native'

import { Colors, horizontalScale, moderateScale } from '@styles/index'
import Text from '../Text'

const AnimatedTyping = ({
  color = Colors.TextColor.Teks100,
  borderColor = Colors.TextColor.Teks100,
  fontSize = 14,
  text,
  style,
  ...props
}) => {
  const blinkAnim = useMemo(() => new Animated.Value(0), [])

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(blinkAnim, {
          toValue: 1,
          config: 200,
          useNativeDriver: true
        }),
        Animated.timing(blinkAnim, {
          toValue: 0,
          config: 200,
          useNativeDriver: true
        })
      ])
    ).start()
  }, [blinkAnim])

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text fontSize={fontSize} color={color} {...props}>
        {text}
      </Text>
      <Animated.View
        style={{
          borderLeftWidth: horizontalScale(1.9),
          height: moderateScale(fontSize * 1.2),
          opacity: blinkAnim,
          borderColor: borderColor
        }}
      />
    </View>
  )
}

export default AnimatedTyping
