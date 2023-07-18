import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'

import { Text } from '@atoms/index'
import { horizontalScale } from '@styles/index'
import Container, { Content } from '@templates/Container'
import images from '@images/index'

function Login({ navigation, route }) {
  return (
    <Container>
      <ImageBackground
        source={images.BACKGROUND2}
        resizeMode={'cover'}
        style={styles.imgContainer}>
        <Content>
          <View style={styles.content}>
            <Text>Login</Text>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  )
}
export default Login

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1
  },

  content: {
    marginTop: horizontalScale(50)
  },

  imgLogo: {
    width: horizontalScale(211),
    height: horizontalScale(60)
  }
})
