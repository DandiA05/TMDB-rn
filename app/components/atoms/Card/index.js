import React from 'react'
import { View, TouchableNativeFeedback, Platform } from 'react-native'
import {
  Colors,
  verticalScale,
  horizontalScale,
  moderateScale,
  Shadow
} from '@styles'

const padding = {
  paddingHorizontal: horizontalScale(16),
  paddingVertical: verticalScale(16)
}

const Card = ({
  children,
  backgroundColor = Colors.White,
  colorRipple = Colors.Soft,
  style,
  styleCard,
  havePadding = true,
  withShadow = true,
  ...props
}) => (
  <View
    style={[
      {
        borderRadius: moderateScale(12),
        overflow: 'hidden'
      },
      withShadow && Shadow,
      style
    ]}>
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(colorRipple)}
      {...props}>
      <View
        pointerEvents={'auto'}
        style={[
          {
            overflow: 'hidden',
            borderRadius: moderateScale(12),
            backgroundColor: backgroundColor
          },
          havePadding && padding,
          styleCard
        ]}>
        {children}
      </View>
    </TouchableNativeFeedback>
  </View>
)

export default Card
