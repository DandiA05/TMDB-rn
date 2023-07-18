import React, { useEffect, useState } from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  ToastAndroid,
  View
} from 'react-native'

import { Header, Text } from '@atoms/index'
import adapters from './utils/adapters'
import Container, { Content } from '@templates/Container'
import images from '@images/index'
import { Colors, horizontalScale } from '@styles/index'
import moment from 'moment'

function UpComing({ navigation, route }) {
  const [data, setData] = useState()
  const handleGetData = () => {
    adapters.getDataUpComing().then(response => {
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
                    UP COMING MOVIE
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
export default UpComing

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
