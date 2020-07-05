import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native-elements'

const Error = ({ modal }) => {
  return (
    <View>
      <Text style={{ fontSize: 24 }}>{modal.data.message}</Text>
    </View>
  )
}

export default Error
