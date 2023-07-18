import React, { useState, useEffect, useCallback } from 'react'
import { View } from 'react-native'
import { Button, Paragraph, Dialog, Portal, Provider } from 'react-native-paper'

import Text from '../Text'
import { Colors, Shadow } from '@styles/index'

const Alert = ({
  show,
  title = '',
  desc = '',
  positive = 'Oke',
  negative,
  onHide,
  onPositive,
  onNegative
}) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (show) {
      showDialog()
    } else {
      hideDialog()
    }
  }, [show, hideDialog])

  const showDialog = () => setVisible(true)

  const hideDialog = useCallback(() => {
    setVisible(false)
    onHide(false)
  }, [onHide])

  return (
    <Dialog
      visible={visible}
      onDismiss={hideDialog}
      style={[{ borderRadius: 16 }, Shadow]}>
      <View style={{ padding: 16 }}>
        <Text bold fontSize={18} style={{ textAlign: 'center' }}>
          {title}
        </Text>
        <View style={{ marginTop: 10 }}>
          <Text color={Colors.TextColor.Teks80} style={{ textAlign: 'center' }}>
            {desc}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 0.7,
          marginTop: 10,
          borderTopColor: Colors.TextColor.Teks30
        }}>
        {negative && (
          <Button
            uppercase={false}
            style={{ flex: 1, justifyContent: 'center' }}
            color={Colors.WhiteSystem.Soft}
            onPress={() => {
              hideDialog()
              if (onNegative) {
                onNegative()
              }
            }}>
            <Text semiBold>{negative}</Text>
          </Button>
        )}
        {negative && (
          <View
            style={{
              marginTop: 5,
              height: 25,
              borderLeftWidth: 0.7,
              borderColor: Colors.TextColor.Teks30
            }}
          />
        )}
        <Button
          uppercase={false}
          style={{ flex: 1, justifyContent: 'center' }}
          color={Colors.WhiteSystem.Soft}
          onPress={() => {
            hideDialog()
            onPositive()
          }}>
          <Text semiBold>{positive}</Text>
        </Button>
      </View>
    </Dialog>
  )
}

export default Alert
