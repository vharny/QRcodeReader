import React from 'react'
import { Overlay, Button, Text, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View } from 'react-native'
import styles from './styles'

const Modal = ({ isVisible, toggle, promotion, color }) => {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      onBackdropPress={() => toggle()}
      width="90%"
      height="75%"
    >
      <View>
        {promotion && (
          <View style={{ alignItems: 'center' }}>
            <Avatar
              size="xlarge"
              rounded
              source={{ uri: promotion.product.url }}
              containerStyle={[styles.avatar, { borderColor: color }]}
            />
            <Text h4 style={styles.title}>
              {promotion.libelle}
            </Text>
            <Text style={styles.description}>
              {promotion.description}
            </Text>
          </View>
        )}
        <Button
          icon={<Icon name="undo" size={15} color="white" />}
          title=" Scan QRcode"
          buttonStyle={{ backgroundColor: color }}
          onPress={() => toggle()}
        />
      </View>
    </Overlay>
  )
}

export default Modal
