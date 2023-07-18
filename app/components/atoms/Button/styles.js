import { StyleSheet } from 'react-native'
import {
  Colors,
  horizontalScale,
  verticalScale,
  moderateScale
} from '../../../assets/styles'

export default StyleSheet.create({
  containerButton: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.Endeavour.Root
  },
  btnDraft: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(6),
    borderRadius: moderateScale(8)
  }
})
