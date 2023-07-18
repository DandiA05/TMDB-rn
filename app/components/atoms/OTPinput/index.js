import React, { useRef, useState, useEffect } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Text from '../Text'
import AnimatedTyping from '../Typing'
import styles from './styles'

const OTPinput = ({
  code,
  setCode,
  pinCount,
  setIsPinReady,
  keyboardType,
  fontSize = 26,
  style
}) => {
  const inputRef = useRef()
  const boxArray = new Array(pinCount).fill(0)

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false)

  const handleOnPress = () => {
    setIsInputBoxFocused(true)
    inputRef.current.focus()
  }

  const handleOnBlur = () => {
    setIsInputBoxFocused(false)
  }

  const boxDigit = (_, index) => {
    const emptyInput = ''
    const digit = code[index] || emptyInput

    const maxLength = index === pinCount - 1
    const isLastValue = code.length === pinCount
    const isCurrentValue = index === code.length
    const lastIndex = index === code.length - 1
    const isCodeComplete = isLastValue && maxLength ? lastIndex : isCurrentValue
    const currentInput = index === 0 && code === ''

    const isValueFocused = isCodeComplete || currentInput

    return (
      <TouchableOpacity
        onPress={handleOnPress}
        activeOpacity={0.8}
        style={styles.BoxContainer}>
        <View
          style={[styles.SplitBoxes, style]}
          onLayout={() => {
            if (code.length === pinCount) {
              setIsPinReady(true)
            } else {
              setIsPinReady(false)
            }
          }}>
          {isInputBoxFocused && isValueFocused ? (
            <AnimatedTyping
              bold
              fontSize={fontSize}
              style={styles.SplitBoxText}
              text={digit}
            />
          ) : (
            <Text bold fontSize={fontSize} style={styles.SplitBoxText}>
              {digit}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      <View style={styles.SplitOTPBoxesContainer}>
        {boxArray.map(boxDigit)}
      </View>

      <View style={{ opacity: 0, height: 0 }}>
        <TextInput
          value={code}
          onChangeText={val => {
            val = val.replace(/[^0-9]/g, '')
            setCode(val)
          }}
          maxLength={pinCount}
          ref={inputRef}
          keyboardType={keyboardType}
          onBlur={handleOnBlur}
        />
      </View>
    </View>
  )
}

export default OTPinput
