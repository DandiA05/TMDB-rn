import { Colors, horizontalScale } from '@styles/index'
import React, { Component, useCallback, useState } from 'react'
import { Image, Platform, Pressable, StyleSheet, View } from 'react-native'

import { Container } from '@templates/index'
import { Text } from '@atoms/index'
import images, {
  EditIcon,
  HomeIcon,
  LeadsIcon,
  ProfileIcon
} from '@images/index'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home'
import NowPlaying from '../NowPlaying'
import Popular from '../Popular'
import UpComing from '../UpComing'

const Tab = createBottomTabNavigator()

function Main({ navigation }) {
  const [initialRouteName, setInitialRouteName] = useState('Beranda')
  const [routeIndex, setRouteIndex] = useState(0)

  const tabBarLabel = (focused, color, route) => (
    <Text
      fontSize={10}
      color={focused ? Colors.TextColor.Teks : Colors.TextColor.Teks72}>
      {route.name !== 'Canvas' && route.name}
    </Text>
  )

  const barIcons = (focused, color, size, route) => {
    let tabBarIcon = {
      Beranda: (
        <HomeIcon
          width={horizontalScale(size)}
          height={horizontalScale(size)}
          fill={color}
        />
      ),
      'Now Playing': (
        <LeadsIcon
          width={horizontalScale(size)}
          height={horizontalScale(size)}
          fill={color}
        />
      ),
      Popular: (
        <LeadsIcon
          width={horizontalScale(size)}
          height={horizontalScale(size)}
          fill={color}
        />
      ),
      'Up Coming': (
        <LeadsIcon
          width={horizontalScale(size)}
          height={horizontalScale(size)}
          fill={color}
        />
      )
    }

    return <View>{tabBarIcon[route.name]}</View>
  }

  return (
    <Container>
      <Tab.Navigator
        initialRouteName={initialRouteName}
        screenListeners={({ route }) => ({
          state: e => {
            // Do something with the state
            // console.log('state changed', e.data.state.index)
            setRouteIndex(e.data.state.index)
            // this.loadIP()
            // console.log('route', route)
          }
        })}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: Colors.Primary,
          tabBarInactiveTintColor: Colors.Grey.Fair,
          tabBarLabel: ({ focused, color }) =>
            tabBarLabel(focused, color, route),
          tabBarIcon: ({ focused, color, size }) =>
            barIcons(focused, color, size, route),
          tabBarStyle: {
            paddingBottom: horizontalScale(10),
            paddingTop: horizontalScale(10),
            height: horizontalScale(Platform.OS === 'ios' ? 90 : 65)
          }
        })}>
        <Tab.Screen name="Beranda" component={Home} />
        <Tab.Screen name="Now Playing" component={NowPlaying} />
        <Tab.Screen name="Popular" component={Popular} />
        <Tab.Screen name="Up Coming" component={UpComing} />
      </Tab.Navigator>
    </Container>
  )
}
export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
