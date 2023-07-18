import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { Colors, moderateScale, verticalScale } from '@styles'
import { ActivityIndicator } from 'react-native-paper'

import Text from '../Text'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'

const Button = ({
  label,
  isLoading,
  disabled,
  buttonColor = Colors.Endeavour.Fair,
  textColor = Colors.TextColor.Teks10,
  floatingIcon,
  leftIcon,
  style,
  ...props
}) => (
  <TouchableOpacity
    {...props}
    activeOpacity={0.5}
    disabled={disabled}
    style={[
      {
        backgroundColor: disabled
          ? Colors.rgbaConverter(buttonColor, 0.17)
          : Colors.rgbaConverter(buttonColor),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: verticalScale(12),
        borderRadius: moderateScale(12)
      },
      style
    ]}>
    {isLoading ? (
      <ActivityIndicator
        size={moderateScale(24)}
        color={Colors.TextColor.Teks10}
      />
    ) : (
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row'
        }}>
        {floatingIcon && (
          <View style={{ position: 'absolute', left: verticalScale(12) }}>
            {floatingIcon}
          </View>
        )}
        {leftIcon && (
          <View style={{ marginRight: verticalScale(10) }}>{leftIcon}</View>
        )}
        <Text
          bold
          fontSize={16}
          color={
            disabled
              ? Colors.rgbaConverter(textColor, 0.7)
              : Colors.rgbaConverter(textColor)
          }
          style={{ textAlign: 'center' }}>
          {label}
        </Text>
      </View>
    )}
  </TouchableOpacity>
)

export const ButtonCustom = ({
  text,
  onPress,
  disabled,
  style,
  ...textProps
}) => {
  return (
    <Button
      disabled={disabled}
      onPress={onPress}
      style={[styles.containerButton, style]}>
      <Text {...textProps}>{text}</Text>
    </Button>
  )
}

export const SimpanDraftButton = ({
  title = 'Simpan Draf',
  disabled,
  onPress,
  backgroundColor = Colors.Endeavour.Heavy,
  textColor = Colors.WhiteSystem.Massive
}) => {
  const token = useSelector(state => state.dataProfile.dataProfile.tokenSession)
  if (token) {
    console.log('Kondisi login')
    return (
      <TouchableOpacity
        style={[
          styles.btnDraft,
          { opacity: disabled ? 0.4 : 1 },
          { backgroundColor: backgroundColor }
        ]}
        onPress={() => onPress()}
        disabled={disabled}>
        <Text
          semiBold
          style={{
            color: textColor,
            fontSize: 12,
            lineHeight: 14
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    )
  } else {
    console.log('Kondisi tidak login')
    return
  }
}

export default Button
