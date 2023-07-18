import React, { useEffect } from 'react'
import { Image, ImageBackground, View } from 'react-native'
import { Colors } from '@styles'
import images from '@images/index'

import styles from './styles'
import { ActivityIndicator } from 'react-native-paper'

const Splash = () => {
  return (
    <ImageBackground source={images.BACKGROUND} style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={images.LOGO}
          resizeMode="contain"
          style={styles.imgLogo}
        />
        <ActivityIndicator
          style={styles.loader}
          size="small"
          color={Colors.TreePoppy.Fair}
        />
      </View>
    </ImageBackground>
  )
}

export default Splash
