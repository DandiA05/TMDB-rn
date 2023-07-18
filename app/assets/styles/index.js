import { Dimensions, StatusBar } from 'react-native'
const Fonts = {
  Ubuntu: {
    Bold: 'Ubuntu-Bold',
    BoldItalic: 'Ubuntu-BoldItalic',
    Italic: 'Ubuntu-Italic',
    Light: 'Ubuntu-Light',
    LightItalic: 'Ubuntu-LightItalic',
    Regular: 'Ubuntu-Regular',
    SemiBold: 'Ubuntu-Medium',
    SemiBoldItalic: 'Ubuntu-MediumItalic'
  }
}

const Colors = {
  TreePoppy: {
    Massive: '#945612',
    Heavy: '#C57218',
    Fair: '#F68F1E',
    Soft: '#F8A54B',
    Root: '#FBD2A5'
  },
  Endeavour: {
    Massive: '#003264',
    Heavy: '#004385',
    Fair: '#0054A6',
    Soft: '#3376B8',
    Root: '#6698CA'
  },
  WhiteSystem: {
    Massive: '#FBFBFB',
    Heavy: '#E7E7E7',
    Fair: '#D3D3D3',
    Soft: '#E4E4E4',
    Root: '#A7A7A7'
  },
  RedSystem: {
    Massive: '#C16262',
    Heavy: '#F47C7C',
    Fair: '#EF9F9F',
    Soft: '#FAD4D4',
    Root: '#FFF2F2'
  },
  BlackSystem: {
    Massive: '#222222',
    Heavy: '#383838',
    Fair: '#424242',
    Soft: '#7A7A7A',
    Root: '#909090'
  },
  Malibu: {
    Massive: '#205899',
    Heavy: '#2A75CC',
    Fair: '#3592FF',
    Soft: '#5DA8FF',
    Root: '#F0F6F8'
  },
  TextColor: {
    Teks: '#101D2C',
    Teks100: '#222222',
    Teks90: '#383838',
    Teks80: '#424242',
    Teks72: '#707E8D',
    Teks70: '#7A7A7A',
    Teks65: '#7E7E7E',
    Teks62: '#9C9C9C',
    Teks60: '#909090',
    Teks50: '#A7A7A7',
    Teks40: '#BDBDBD',
    Teks30: '#D3D3D3',
    Teks20: '#E9E9E9',
    Teks10: '#FBFBFB'
  },
  Error: {
    Massive: '#640000',
    Heavy: '#850000',
    Fair: '#A60000',
    Soft: '#B83333',
    Root: '#CA6666'
  },
  Success: {
    Massive: '#5A8500',
    Heavy: '#669500',
    Fair: '#71A600',
    Soft: '#8DB833',
    Root: '#AACA66'
  },
  Info: {
    Massive: '#205899',
    Heavy: '#2A75CC',
    Fair: '#3592FF',
    Soft: '#5DA8FF',
    Root: '#B5D7FF'
  },
  Warning: {
    Massive: '#C89C02',
    Heavy: '#E1AF02',
    Fair: '#FAC302',
    Soft: '#FCD54E',
    Root: '#FDE180'
  },
  Grey: {
    Massive: '#7E7E7E',
    Heavy: '#A4A4A4',
    Fair: '#CED1D4',
    Soft: '#F9F9F9',
    Root: '#F0F0F0'
  },
  Primary: '#04325F',
  ActivePrimary: '#2C598D',
  Background: '#FFFFFF',
  White: '#FFFFFF',
  Black: '#000000',
  SmoothGrey: '#F0F5FA',
  Form: '#FFFFFF',
  FormBorder: '#D6D6D6',
  FormError: '#f9E9E9',
  Google: '#F4EFEF',
  WhiteTransparent: 'rgba(255, 255, 255, 0.5)',
  BlackTransparent: 'rgba(0, 0, 0, 0.8)',
  ModalTransparent: 'rgba(0, 0, 0, 0.5)',
  Transparent: 'rgba(0, 0, 0, 0)',
  WhiteTranscluent: 'rgba(255, 255, 255, 0.75)',
  BlackTranscluent: 'rgba(0, 0, 0, 0.75)',
  TitleText: '#424242',
  BorderTextField: '#D6D6D6',
  RedAlert: '#AC2020',
  UnActife: '#EDEDED',

  rgbaConverter: (hexCode, opacity = 1) => {
    let hex = hexCode.replace('#', '')

    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    /* Backward compatibility for whole number based opacity values. */
    if (opacity > 1 && opacity <= 100) {
      opacity = opacity / 100
    }

    return `rgba(${r},${g},${b},${opacity})`
  }
}

//Responsive UI
const Width = Dimensions.get('screen').width
const Height = Dimensions.get('screen').height
const HeightWindow = Dimensions.get('window').height

const STATUS_BAR_HEIGHT = StatusBar.currentHeight
const HeightNav = Height - (HeightWindow + STATUS_BAR_HEIGHT)

const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

const horizontalScale = size => (Width / guidelineBaseWidth) * size
const verticalScale = size => (Height / guidelineBaseHeight) * size
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor

const Space = {
  SpaceXS: 4,
  SpaceS: 8,
  SpaceBase: 15,
  SpaceM: 24,
  SpaceL: 32,
  SpaceXL: 40,
  SpaceXLL: 48
}

const Shadow = {
  shadowColor: ' rgba(0, 0, 0, 0.7)',
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.17,
  shadowRadius: 2.54,
  elevation: 5
}

export {
  Fonts,
  Colors,
  Width,
  Height,
  Shadow,
  HeightWindow,
  HeightNav,
  STATUS_BAR_HEIGHT,
  horizontalScale,
  verticalScale,
  moderateScale,
  Space
}
