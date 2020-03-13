import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ListItem, Header } from 'react-native-elements';
import constants from '../../constants';
import Modal from '../Modal/Modal';

const PromotionsList = () => {
  const [promotions, setPromotions] = useState([]);
  const [modal, setModal] = useState(false);
  const [selectedPromotion, setSelectedPromotion] = useState();

  useEffect(() => {
    fetch(`${constants.api}/coupon`)
      .then(response => response.json())
      .then(res => setPromotions(res));
  }, []);

  const handleListItemPress = promotion => {
    setSelectedPromotion(promotion);
    setModal(true);
  } 

  return (
    <View>
      {/* Header */}
      <Header
        placement="left"
        backgroundColor="#ff99ff"
        leftComponent={{
          text: 'Promotions',
          style: { color: '#fff', fontWeight: 'bold' },
        }}
        rightComponent={{ text: `${promotions.length} Availables`, style: { color: '#fff' } }}
      />
      {/* List with all active promotions */}
      {promotions.map((promotion, i) => (
        <ListItem
          leftAvatar={{ source: { uri: promotion.product.url } }}
          title={promotion.libelle}
          subtitle={promotion.description}
          bottomDivider
          onPress={() => handleListItemPress(promotion)}
          key={i}
        />
      ))}
      {/* Modal with promotion's informations */}
      <Modal
        isVisible={modal}
        setVisible={setModal}
        promotion={selectedPromotion}
        color={'#ff99ff'}
      />
    </View>
  )
}

export default PromotionsList;
