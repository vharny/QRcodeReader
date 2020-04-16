import React from 'react'
import { View } from 'react-native'
import { Text, Avatar } from 'react-native-elements'
import styles from '../styles'

const Promotion = ({ modal, color }) => {
  return (
    <View>
      <Avatar
        size="xlarge"
        rounded
        source={{ uri: modal.data.product.url }}
        containerStyle={[styles.avatar, { borderColor: color }]}
      />
      <Text h4 style={styles.title}>
        {modal.data.libelle}
      </Text>
      <Text style={styles.description}>{modal.data.description}</Text>
    </View>
  )
}

export default Promotion
