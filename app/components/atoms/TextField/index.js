import React, { useCallback, useEffect, useState, useRef } from 'react'
import {
  View,
  LayoutAnimation,
  Platform,
  UIManager,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import Text from '../Text'
import {
  Colors,
  horizontalScale,
  verticalScale,
  moderateScale,
  Width,
  Fonts,
  Height
} from '@styles/index'

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

const TextField = ({
  label,
  value,
  labelColor = Colors.TextColor.Teks50,
  textColor = Colors.TextColor.Teks100,
  fontSize = 14,
  labelFontSize = 14,
  fonStyle = 'Regular',
  secureTextEntry = false,
  onPressLabel,
  labelIcon,
  centerRightAccessory = false,
  centerLeftAccessory = false,
  backgroundColor,
  rightAccessory,
  leftAccessory,
  openLabel = false,
  underlineColor,
  multiline = false,
  editable = true,
  style,
  fieldStyle,
  valueStyle,
  height = 60,
  focussListener,
  border,
  borderColor,
  ...props
}) => {
  const refInput = useRef()
  const [focuss, setIsFocuss] = useState(false)
  const [bottom, setBottom] = useState(-35)
  const [textAlign, settextAlign] = useState(0)
  const [marginLeft, setMarginLeft] = useState(0)
  const [sizeFont, setSizeFont] = useState(labelFontSize)
  // console.log('REFSSS ', value.length || 'kosong')

  useEffect(() => {
    if (value?.length > 0 || focuss) {
      if (!openLabel) {
        textTransform(true)
      }
    } else {
      textTransform(false)
    }

    return () => {}
  }, [value, focuss, textTransform, openLabel, focussListener])

  const textTransform = useCallback(
    isTrue => {
      LayoutAnimation.configureNext({
        duration: 225,
        update: {
          type: 'easeInEaseOut'
        }
      })

      if (isTrue) {
        setSizeFont(labelFontSize - 4)
        setBottom(-9)
        setMarginLeft(0)

        setTimeout(() => {
          settextAlign(0.2)
        }, 500)
      } else {
        setBottom(-21)
        setMarginLeft(0)
        setSizeFont(labelFontSize)
      }
    },

    [labelFontSize]
  )

  const setInFocuse = () => {
    refInput.current.focus()
    setIsFocuss(true)
  }

  const layoutText = event => {
    const { height } = event.nativeEvent.layout
    // console.log('HEIGHTTTT', height)
  }

  return (
    <TouchableWithoutFeedback disabled={!editable} onPress={setInFocuse}>
      <View
        onLayout={layoutText}
        style={[
          {
            borderRadius: moderateScale(12),
            height: height,
            paddingHorizontal: horizontalScale(16),
            backgroundColor: backgroundColor || Colors.Form,
            borderWidth: border ? border : 0,
            borderColor: borderColor || Colors.RedSystem.Soft
          },
          style
        ]}>
        {label && (
          <View
            style={{
              // borderWidth: 1,
              position: 'relative',
              justifyContent: 'flex-end',
              maxWidth: rightAccessory ? '90%' : '100%',
              bottom: openLabel ? -5 : bottom,
              marginLeft: horizontalScale(openLabel ? 0 : marginLeft)
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text
                fontSize={openLabel ? labelFontSize - 2 : sizeFont}
                style={{
                  // borderWidth: 1,
                  marginRight: horizontalScale(5),
                  marginLeft: verticalScale(leftAccessory ? 26 : 0),
                  color: labelColor,
                  lineHeight: fontSize * 1.333,
                  width: rightAccessory ? '90%' : '100%'
                }}>
                {label}
              </Text>
              {labelIcon && (
                <TouchableOpacity onPress={onPressLabel}>
                  {labelIcon}
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}

        {leftAccessory && (
          <View
            style={{
              // borderWidth: 1,
              flex: 1,
              marginLeft: horizontalScale(16),
              height: '100%',
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center'
            }}>
            {leftAccessory}
          </View>
        )}
        <View pointerEvents={editable ? 'auto' : 'none'} style={[fieldStyle]}>
          <TextInput
            ref={refInput}
            style={[
              {
                color: textColor,
                padding: 0,
                height: label ? 'auto' : '100%',
                width:
                  rightAccessory && leftAccessory
                    ? '80%'
                    : rightAccessory || leftAccessory
                    ? '90%'
                    : '100%',
                marginLeft: horizontalScale(leftAccessory ? 30 : 0),
                fontFamily: Fonts.SourceSans[fonStyle],
                fontSize: moderateScale(fontSize),
                marginTop: openLabel ? 0 : 4
              },
              valueStyle
            ]}
            secureTextEntry={secureTextEntry}
            editable={editable}
            multiline={multiline}
            onFocus={() => setIsFocuss(true)}
            onBlur={() => setIsFocuss(false)}
            value={value}
            {...props}
          />
        </View>
        {rightAccessory && (
          <View
            style={{
              // borderWidth: 1,
              flex: 1,
              right: horizontalScale(16),
              height: '100%',
              position: 'absolute',
              bottom: 0,
              justifyContent: 'center'
            }}>
            {rightAccessory}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TextField
