import { View } from 'react-native'
import React from 'react'
import { useEffect } from 'react'
import { Colors } from '@app/assets/styles'
import Text from '../Text'

const CountTime = ({ timer, wording = '', onFinishCount }) => {
  const [time, setTime] = React.useState(timer)
  const [detik, setDetik] = React.useState(Math.floor((time / 1000) % 60))
  const [menit, setMenit] = React.useState(Math.floor((time / 1000 / 60) % 60))
  const [jam, setJam] = React.useState(0)
  const timerRef = React.useRef(time)

  useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1000
      if (timerRef.current < 0) {
        clearInterval(timerId)
        onFinishCount(true)
      } else {
        setTime(timerRef.current)
        const seconds = Math.floor((timerRef.current / 1000) % 60)
        const minutes = Math.floor((timerRef.current / 1000 / 60) % 60)
        const hours = Math.floor((timerRef.current / (1000 * 60 * 60)) % 24)
        setDetik(seconds)
        setMenit(minutes)
        setJam(hours)
      }
    }, 1000)
    return () => {
      clearInterval(timerId)
    }
  }, [time, onFinishCount])

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text>{wording} </Text>
      <Text>
        {menit < 10 ? '0' + menit : menit}:{detik < 10 ? '0' + detik : detik}
      </Text>
    </View>
  )
}

export default CountTime
