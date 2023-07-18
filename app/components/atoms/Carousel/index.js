import React, { useState } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import Text from '../Text'

import Carousel from 'react-native-reanimated-carousel'
import { useNavigation } from '@react-navigation/native'

import { Colors, Width, horizontalScale } from '@styles/index'
import styles from './styles'
import { ChevronRightIcon } from '@app/assets/images'
import { useSelector } from 'react-redux'

const BannerCarousel = ({ data, titlePromo = 'Promo', showPage = true }) => {
  const navigation = useNavigation()

  const [indexPromo, setIndexPromo] = useState(0)

  const onNavigate = (nav, item) => {
    navigation.navigate(nav, item)
  }

  const checkBackground = id => {
    if (id <= indexPromo) {
      return Colors.Endeavour.Heavy
    } else if (id >= indexPromo + 1) {
      switch (id) {
        case indexPromo + 1:
          return Colors.rgbaConverter(Colors.Endeavour.Heavy, 0.8)
        case indexPromo + 2:
          return Colors.rgbaConverter(Colors.Endeavour.Heavy, 0.6)
        case indexPromo + 3:
          return Colors.rgbaConverter(Colors.Endeavour.Heavy, 0.4)
        default:
          return Colors.rgbaConverter(Colors.Endeavour.Heavy, 0.2)
      }
    }
  }

  return (
    <View>
      <View style={styles.containerTextPromo} color={Colors.TextColor.Teks80}>
        <Text fontSize={16} semiBold color={Colors.TextColor.Teks80}>
          {titlePromo}
        </Text>
        {data?.length !== 0 && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text fontSize={11} color={Colors.ActivePrimary}>
              Lihat semua
            </Text>
            <ChevronRightIcon
              width={horizontalScale(9)}
              height={horizontalScale(9)}
              style={{ marginLeft: horizontalScale(5) }}
              fill={Colors.ActivePrimary}
            />
          </TouchableOpacity>
        )}
      </View>

      {data?.length !== 0 && (
        <View>
          <Carousel
            loop
            width={Width}
            height={horizontalScale(130)}
            autoPlay={true}
            data={data}
            mode="parallax"
            modeConfig={{
              parallaxScrollingScale: 1,
              parallaxScrollingOffset: horizontalScale(30)
            }}
            autoPlayInterval={4000}
            scrollAnimationDuration={1000}
            onSnapToItem={index => setIndexPromo(index)}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                index={index}
                activeOpacity={0.9}
                style={{ marginLeft: horizontalScale(14) }}>
                <Image
                  source={{
                    uri:
                      'https://www.themoviedb.org/t/p/w220_and_h330_face/' +
                      item.poster_path
                  }}
                  resizeMode="stretch"
                  style={styles.imageCarrousell}
                />
              </TouchableOpacity>
            )}
          />

          {showPage && (
            <View style={styles.containerDotsPagination}>
              {data.map((val, idx) => {
                return (
                  <View
                    style={[
                      styles.dotsPagination,
                      {
                        backgroundColor: checkBackground(idx),
                        width: indexPromo === idx ? 40 : 5
                      }
                    ]}
                  />
                )
              })}
            </View>
          )}
        </View>
      )}
    </View>
  )
}

export default BannerCarousel
