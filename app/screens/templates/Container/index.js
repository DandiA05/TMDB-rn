import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
  BackHandler,
  ScrollView
} from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Button, Text, Header, TextField } from '@atoms/index'
import {
  Colors,
  horizontalScale,
  verticalScale,
  moderateScale
} from '@styles/index'
import images, { BackIcon, EyeIcon, EyeStripeIcon } from '@images/index'
import { SafeAreaProvider } from 'react-native-safe-area-context'

// import { ScrollView } from 'react-native-gesture-handler'

import {
  AvoidSoftInput,
  AvoidSoftInputView
} from 'react-native-avoid-softinput'

const Container = ({
  children,
  backgroundColor = Colors.Background,
  fullContainer = false,
  opacity = 1,
  style,
  title,
  centerTitle,
  padding = true,
  headerShow = false,
  backPress,
  rightIcon,
  above = true,
  goback = true,
  backColor = Colors.Black,
  alignTitle = 'center',
  enableAvoid = false,
  background = Colors.Background,
  titleColor = Colors.TextColor.Teks72,
  sticky = true,
  ...props
}) => {
  const navigation = useNavigation()
  // const modalGloabal = useRef(reduxState.visibleModalGlobal).current

  const goBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack()
    } else {
      console.log('CLOSEE APPP')
      BackHandler.exitApp()
    }

    return true
  }, [navigation])

  useEffect(() => {
    let subscription
    if (backPress) {
      subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        backPress
      )
    } else {
      subscription = BackHandler.addEventListener('hardwareBackPress', goBack)
    }
    return () => subscription.remove()
  }, [goBack, backPress])

  return (
    <View
      style={[{ flex: 1, backgroundColor: backgroundColor }, style]}
      {...props}>
      {fullContainer ? (
        <StatusBar
          animated={true}
          barStyle={opacity < 1 ? 'light-content' : 'dark-content'}
          backgroundColor={fullContainer ? 'transparent' : backgroundColor}
          translucent
        />
      ) : (
        <StatusBar
          animated={true}
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent
        />
      )}
      {headerShow && (
        <Header
          fullContainer={fullContainer}
          opacity={opacity}
          justifyContent={'center'}
          alignItems={alignTitle}
          title={
            typeof title === 'string' ? (
              <Text fontSize={16} color={titleColor}>
                {title}
              </Text>
            ) : (
              title
            )
          }
          goBack={goback}
          rightIcon={rightIcon}
          backColor={backColor}
          background={background}
        />
      )}
      {children}
    </View>
  )
}

export const Content = ({
  children,
  transparent = true,
  backgroundColor = Colors.Background,
  style,
  minHeight = true,
  pageName,
  subName,
  padding = true,
  center = false,
  wrapTitle,
  scrollEnabled = true,
  ...props
}) => (
  <View
    style={[
      {
        // borderWidth: 1,
        flex: 1,
        backgroundColor: transparent ? 'transparent' : backgroundColor,
        paddingHorizontal: padding ? horizontalScale(24) : 0
      },
      style
    ]}
    {...props}>
    <View
      style={[
        {
          flexShrink: 1,
          top: transparent ? horizontalScale(100) : 0,
          alignItems: center ? 'center' : 'flex-start'
        }
      ]}>
      {pageName && (
        <View
          style={{
            flexShrink: 1,
            paddingHorizontal: !padding ? horizontalScale(16) : 0
          }}>
          <Text
            bold
            fontSize={26}
            color={
              transparent ? Colors.TextColor.Teks10 : Colors.TextColor.Teks90
            }
            style={{ flexShrink: 1 }}>
            {pageName}
          </Text>
        </View>
      )}
      {subName && (
        <View
          style={{
            // borderWidth: 1,
            flexShrink: 1,
            marginRight: wrapTitle && horizontalScale(40),
            paddingHorizontal: !padding ? horizontalScale(16) : 0
          }}>
          <Text
            style={{
              flexShrink: 1,
              textAlign: center ? 'center' : 'left',
              marginTop: verticalScale(4)
            }}
            color={
              transparent ? Colors.TextColor.Teks10 : Colors.TextColor.Teks80
            }>
            {subName}
          </Text>
        </View>
      )}
    </View>

    <ScrollView
      showsVerticalScrollIndicator={false}
      scrollEnabled={scrollEnabled}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ paddingBottom: verticalScale(20) }}>
      {children}
    </ScrollView>
  </View>
)

export default Container
