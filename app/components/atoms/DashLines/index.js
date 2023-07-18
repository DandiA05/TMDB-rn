import React from 'react'
import { View } from 'react-native'

import { Dash } from '@addons/index'
import { Colors } from '@styles/index'

const DashLines = ({ style, color = Colors.WhiteSystem.Fair, dash = true }) => (
  <View>
    {dash ? (
      <Dash
        dashGap={4}
        dashLength={7}
        dashThickness={1}
        dashColor={color}
        style={[
          {
            width: '100%'
          },
          style
        ]}
      />
    ) : (
      <View
        style={[
          {
            height: 1,
            width: '100%',
            backgroundColor: color
          },
          style
        ]}
      />
    )}
  </View>
)

export default DashLines
