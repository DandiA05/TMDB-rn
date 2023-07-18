import React, { useEffect, useState } from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  ToastAndroid,
  View
} from 'react-native'

import { Button, Header, Text } from '@atoms/index'
import adapters from './utils/adapters'
import Container, { Content } from '@templates/Container'
import images from '@images/index'
import { Colors, horizontalScale } from '@styles/index'
import { TouchableOpacity } from 'react-native-gesture-handler'
import moment from 'moment'

function NowPlaying({ navigation, route }) {
  const [data, setData] = useState()
  const handleGetData = () => {
    adapters.getDataNowPlaying().then(response => {
      if (response.status === 'success') {
        setData(response.data.results)
      } else {
        ToastAndroid.showWithGravity(
          'Something went wrong',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        )
      }
      console.log(JSON.stringify(response.data.results, null, 2))
    })
  }

  useEffect(() => {
    handleGetData()
  }, [])

  return (
    <Container>
      <ImageBackground
        source={images.BACKGROUND}
        resizeMode={'cover'}
        style={styles.imgContainer}>
        <Content>
          <View style={styles.content}>
            <Header
              title={
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 20
                  }}>
                  <Text fontSize={21} color={Colors.White} semiBold>
                    NOW PLAYING
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
            {data?.map(item => (
              <View
                style={{
                  marginBottom: 30,
                  backgroundColor: Colors.White,
                  padding: 10
                }}>
                <Image
                  style={{ height: 300, flex: 1 }}
                  resizeMode={'cover'}
                  source={{
                    uri:
                      'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                      item.poster_path
                  }}
                />
                <View style={{ marginTop: 10 }}>
                  <Text bold fontSize={20}>
                    {item.title}
                  </Text>
                  <Text fontSize={14} color={Colors.TextColor.Teks80}>
                    {/* {item.release_date}  */}
                    {moment(item.release_date).format('MMM DD, YYYY')}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </Content>
      </ImageBackground>
    </Container>
  )
}
export default NowPlaying

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
  }
})
