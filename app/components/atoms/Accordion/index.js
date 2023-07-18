import React, { useState, useEffect, useRef } from 'react'
import { View, TouchableOpacity, Animated, LayoutAnimation } from 'react-native'

import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronDownFillIcon,
  ChevronUpFillIcon
} from '@images'
import { Colors, Width, verticalScale, horizontalScale } from '@styles'

const Accordion = ({
  title,
  value,
  isExpand = false,
  style,
  circleIcon = false,
  rightContent = <View />,
  expandColor = Colors.BlackSystem.Heavy
}) => {
  const [expand, setExpand] = useState(isExpand)
  const animationController = useRef(new Animated.Value(0)).current

  //ANIMATION
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: expand ? 0 : 1,
      useNativeDriver: true
    }
    Animated.timing(animationController, config).start()
    LayoutAnimation.configureNext(toggleLAnimation)
    setExpand(!expand)
  }

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  const toggleLAnimation = {
    duration: 300,
    update: {
      duration: 300,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut
    },
    delete: {
      duration: 200,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut
    }
  }

  return (
    <View style={[{ overflow: 'hidden' }, style]}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => toggleListItem()}>
        <View
          style={[
            {
              // borderWidth: 1,
              paddingVertical: verticalScale(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center'
            }
          ]}>
          {title}
          {circleIcon ? (
            <View style={{ flexDirection: 'row', alignItems : 'center' }}>
              <View>{rightContent}</View>
              {expand ? (
                <ChevronUpFillIcon
                  width={horizontalScale(14)}
                  height={verticalScale(14)}
                />
              ) : (
                <ChevronDownFillIcon
                  width={horizontalScale(14)}
                  height={verticalScale(14)}
                />
              )}
            </View>
          ) : (
            <Animated.View
              style={{
                marginRight: 10,
                transform: [{ rotateZ: arrowTransform }]
              }}>
              <ChevronUpIcon
                width={horizontalScale(16)}
                height={verticalScale(16)}
                stroke={expandColor}
              />
            </Animated.View>
          )}
        </View>
      </TouchableOpacity>
      {expand && <View>{value}</View>}
    </View>
  )
}

export const AccordionAction = ({
  title,
  value,
  isExpand = false,
  style,
  circleIcon = false,
  rightContent = <View />,
  expandColor = Colors.BlackSystem.Heavy,
  callBack
}) => {
  const [expand, setExpand] = useState(isExpand)
  const animationController = useRef(new Animated.Value(0)).current

  useEffect(() => {
    setExpand(isExpand)
    const config = {
      duration: 300,
      toValue: expand ? 0 : 1,
      useNativeDriver: true
    }
    Animated.timing(animationController, config).start()
    LayoutAnimation.configureNext(toggleLAnimation)
  }, [animationController, expand, isExpand, toggleLAnimation])

  //ANIMATION
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: expand ? 0 : 1,
      useNativeDriver: true
    }
    Animated.timing(animationController, config).start()
    LayoutAnimation.configureNext(toggleLAnimation)
    setExpand(!expand)
    callBack(!expand)
  }

  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  })

  const toggleLAnimation = {
    duration: 300,
    update: {
      duration: 300,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut
    },
    delete: {
      duration: 200,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut
    }
  }

  return (
    <View style={[{ overflow: 'hidden' }, style]}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => toggleListItem()}>
        <View
          style={[
            {
              // borderWidth: 1,
              paddingVertical: verticalScale(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center'
            }
          ]}>
          {title}
          {circleIcon ? (
            <View style={{ flexDirection: 'row' }}>
              <View>{rightContent}</View>
              {expand ? (
                <ChevronUpFillIcon
                  width={horizontalScale(16)}
                  height={verticalScale(16)}
                />
              ) : (
                <ChevronDownFillIcon
                  width={horizontalScale(16)}
                  height={verticalScale(16)}
                />
              )}
            </View>
          ) : (
            <Animated.View
              style={{
                marginRight: 10,
                transform: [{ rotateZ: arrowTransform }]
              }}>
              <ChevronDownIcon
                width={horizontalScale(16)}
                height={verticalScale(16)}
                stroke={expandColor}
              />
            </Animated.View>
          )}
        </View>
      </TouchableOpacity>
      {expand && <View>{value}</View>}
    </View>
  )
}

export default Accordion
