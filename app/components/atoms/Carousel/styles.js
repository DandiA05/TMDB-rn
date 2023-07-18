import { StyleSheet } from 'react-native'
import {
  Colors,
  horizontalScale,
  verticalScale,
  moderateScale,
  Width
} from '@styles'

export default StyleSheet.create({
  containerTextPromo: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    marginBottom: horizontalScale(18)
  },

  imageCarrousell: {
    // borderRadius: moderateScale(8),
    width: Width * 0.87,
    height: horizontalScale(150)
  },

  containerDotsPagination: {
    // borderWidth: 1,
    marginTop: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  dotsPagination: {
    borderRadius: 20,
    height: 5,
    marginHorizontal: horizontalScale(2)
  }
})
