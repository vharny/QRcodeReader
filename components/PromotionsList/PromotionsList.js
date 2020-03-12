import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { ListItem, Header } from 'react-native-elements'
import constants from '../../constants'

const PromotionsList = () => {
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetch(`${constants.api}/coupon`)
      .then(response => response.json())
      .then(res => setPromotions(res));
  }, []);

  return (
    <View>
      <Header
        placement="left"
        backgroundColor="#ff99ff"
        leftComponent={{
          text: 'Promotions',
          style: { color: '#fff', fontWeight: 'bold' },
        }}
        rightComponent={{ text: `${promotions.length} Availables`, style: { color: '#fff' } }}
      />
      {promotions.map((promotion, i) => (
        <ListItem
          key={i}
          leftAvatar={{ source: { uri: promotion.product.url } }}
          title={promotion.libelle}
          subtitle={promotion.product.libelle}
          bottomDivider
        />
      ))}
    </View>
  )
}

export default PromotionsList;
