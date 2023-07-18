import React from 'react'
import { Text as TextView } from 'react-native'
import { Colors, Fonts, moderateScale } from '@styles/index'

const Text = ({
  children,
  style,
  maxLine,
  lineHeight,
  color = Colors.TextColor.Teks,
  fontSize = 14,
  regular = true,
  bold = false,
  boldItalic = false,
  italic = false,
  light = false,
  lightItalic = false,
  semiBold = false,
  semiBoldItalic = false,
  ...props
}) => (
  <TextView
    {...props}
    allowFontScaling={false}
    numberOfLines={maxLine}
    style={[
      { color: color },
      { fontSize: moderateScale(fontSize) },
      { lineHeight: moderateScale(fontSize * 1.333) },
      regular && { fontFamily: Fonts.Ubuntu.Regular },
      bold && { fontFamily: Fonts.Ubuntu.Bold },
      boldItalic && { fontFamily: Fonts.Ubuntu.BoldItalic },
      italic && { fontFamily: Fonts.Ubuntu.Italic },
      light && { fontFamily: Fonts.Ubuntu.Light },
      lightItalic && { fontFamily: Fonts.Ubuntu.LightItalic },
      semiBold && { fontFamily: Fonts.Ubuntu.SemiBold },
      semiBoldItalic && { fontFamily: Fonts.Ubuntu.SemiBoldItalic },
      style
    ]}>
    {children}
  </TextView>
)

export default Text
