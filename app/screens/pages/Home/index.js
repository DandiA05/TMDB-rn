import React, { useEffect, useState } from 'react'
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View
} from 'react-native'

import { Button, Header, Text } from '@atoms/index'
import { Colors, Width, horizontalScale, moderateScale } from '@styles/index'
import images from '@images/index'
import Container, { Content } from '@templates/Container'
import BannerCarousel from '@atoms/Carousel'
import moment from 'moment'
import { ScrollView } from 'react-native-gesture-handler'
import Carousel from 'react-native-reanimated-carousel'
import adapters from '@utils/adapters'

function Home({ navigation, route }) {
  const [dataNowPlaying, setDataNowPlaying] = useState()
  const [dataPopular, setDataPopular] = useState()
  const [dataUpComing, setDataUpComing] = useState()

  const handleGetDataNowPlaying = () => {
    adapters.getDataNowPlaying().then(response => {
      if (response.status === 'success') {
        setDataNowPlaying(response.data.results)
      } else {
        ToastAndroid.showWithGravity(
          'Something went wrong',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        )
      }
    })
  }

  const handleGetPopular = () => {
    adapters.getDataPopular().then(response => {
      if (response.status === 'success') {
        setDataPopular(response.data.results)
      } else {
        ToastAndroid.showWithGravity(
          'Something went wrong',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        )
      }
    })
  }

  const handleGetDataUpComing = () => {
    adapters.getDataUpComing().then(response => {
      if (response.status === 'success') {
        setDataUpComing(response.data.results)
      } else {
        ToastAndroid.showWithGravity(
          'Something went wrong',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        )
      }
    })
  }

  useEffect(() => {
    handleGetDataNowPlaying()
    handleGetPopular()
    handleGetDataUpComing()
  }, [])

  return (
    <Container>
      <ImageBackground
        source={images.BACKGROUND}
        resizeMode={'cover'}
        style={styles.imgContainer}>
        <Content style={{ paddingHorizontal: 10 }}>
          <View style={styles.content}>
            <Header
              title={
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 10
                  }}>
                  <Text fontSize={21} color={Colors.White} semiBold>
                    The Movie Database
                  </Text>
                  <Image
                    source={images.LOGO}
                    style={styles.imgLogo}
                    resizeMode={'contain'}
                  />
                </View>
              }
              alignItems={'center'}
              background={Colors.Transparent}
              horizontal={-16}
            />

            <View>
              <View
                style={styles.containerTextPromo}
                color={Colors.TextColor.Teks80}>
                <Text fontSize={18} semiBold color={Colors.White}>
                  NOW PLAYING
                </Text>
              </View>
              <Carousel
                loop
                data={dataNowPlaying}
                width={Width * 0.95}
                height={250}
                autoPlay={true}
                mode="parallax"
                autoPlayInterval={4000}
                scrollAnimationDuration={1000}
                renderItem={({ index, item }) => (
                  <TouchableOpacity
                    index={index}
                    activeOpacity={0.9}
                    style={{
                      backgroundColor: Colors.White,
                      padding: 10,
                      marginLeft: 14,
                      borderRadius: 8
                    }}>
                    <Image
                      source={{
                        uri:
                          'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                          item.poster_path
                      }}
                      resizeMode="stretch"
                      style={styles.imageCarrousell}
                    />
                    <View style={{ marginTop: 10 }}>
                      <Text bold fontSize={20}>
                        {item.title}
                      </Text>
                      <Text fontSize={14} color={Colors.TextColor.Teks80}>
                        {moment(item.release_date).format('MMM DD, YYYY')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View style={{ marginTop: horizontalScale(50) }}>
              <View
                style={styles.containerTextPromo}
                color={Colors.TextColor.Teks80}>
                <Text fontSize={18} semiBold color={Colors.White}>
                  POPULAR MOVIE
                </Text>
              </View>
              <Carousel
                loop
                data={dataPopular}
                width={Width * 0.95}
                height={250}
                autoPlay={true}
                mode="parallax"
                autoPlayInterval={4000}
                scrollAnimationDuration={1000}
                renderItem={({ index, item }) => (
                  <TouchableOpacity
                    index={index}
                    activeOpacity={0.9}
                    style={{
                      backgroundColor: Colors.White,
                      padding: 10,
                      marginLeft: 14,
                      borderRadius: 8
                    }}>
                    <Image
                      source={{
                        uri:
                          'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                          item.poster_path
                      }}
                      resizeMode="stretch"
                      style={styles.imageCarrousell}
                    />
                    <View style={{ marginTop: 10 }}>
                      <Text bold fontSize={20}>
                        {item.title}
                      </Text>
                      <Text fontSize={14} color={Colors.TextColor.Teks80}>
                        {moment(item.release_date).format('MMM DD, YYYY')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>

            <View style={{ marginTop: horizontalScale(50) }}>
              <View
                style={styles.containerTextPromo}
                color={Colors.TextColor.Teks80}>
                <Text fontSize={18} semiBold color={Colors.White}>
                  UP COMING MOVIE
                </Text>
              </View>
              <Carousel
                loop
                data={dataUpComing}
                width={Width * 0.95}
                height={250}
                autoPlay={true}
                mode="parallax"
                autoPlayInterval={4000}
                scrollAnimationDuration={1000}
                renderItem={({ index, item }) => (
                  <TouchableOpacity
                    index={index}
                    activeOpacity={0.9}
                    style={{
                      backgroundColor: Colors.White,
                      padding: 10,
                      marginLeft: 14,
                      borderRadius: 8
                    }}>
                    <Image
                      source={{
                        uri:
                          'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                          item.poster_path
                      }}
                      resizeMode="stretch"
                      style={styles.imageCarrousell}
                    />
                    <View style={{ marginTop: 10 }}>
                      <Text bold fontSize={20}>
                        {item.title}
                      </Text>
                      <Text fontSize={14} color={Colors.TextColor.Teks80}>
                        {moment(item.release_date).format('MMM DD, YYYY')}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
        </Content>
      </ImageBackground>
    </Container>
  )
}
export default Home

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1
  },

  content: {
    marginTop: horizontalScale(50)
  },

  imgLogo: {
    width: horizontalScale(60),
    height: horizontalScale(60)
  },
  imageCarrousell: {
    borderRadius: moderateScale(8),
    width: Width * 0.87,
    // flex: 1,
    height: horizontalScale(150)
  },
  containerTextPromo: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    marginBottom: horizontalScale(10)
  }
})
