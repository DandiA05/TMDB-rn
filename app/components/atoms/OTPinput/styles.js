import { StyleSheet } from 'react-native'
import {
  Colors,
  Fonts,
  verticalScale,
  horizontalScale,
  Width,
  moderateScale
} from '@styles/index'

export default StyleSheet.create({
  SplitOTPBoxesContainer: {
    // borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  BoxContainer: {
    // borderWidth: 1
  },
  SplitBoxes: {
    // borderWidth: 1,
    borderRadius: moderateScale(12),
    padding: horizontalScale(10),
    minWidth: horizontalScale(45),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.Form
  },

  SplitBoxText: {
    textAlign: 'center'
  }
})
