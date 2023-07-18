import { StyleSheet } from 'react-native'
import { Colors, verticalScale } from '@styles/index'

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.Endeavour.Soft,
    flex: 1
  },

  logoContainer: {
    // borderWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgLogo: {
    width: 200,
    height: 200
  },

  loader: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: verticalScale(50)
  }
})
