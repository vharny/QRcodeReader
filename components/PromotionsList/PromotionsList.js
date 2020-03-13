import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { ListItem, Header } from 'react-native-elements'
import constants from '../../constants'
import Modal from '../Modal/Modal'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'

const PromotionsList = () => {

  const [state, setState] = useState({
    loading: false,
    promotions: [],
    modalVisible: false,
    selectedPromotion: null
  })

  useEffect(() => {
    fetchPromotions();
  }, []);

  const fetchPromotions = () => {
    setState({ ...state, loading: true });
    fetch(`${constants.api}/coupon`)
      .then(response => response.json())
      .then(res => setState({ ...state, promotions: res, loading: false }));
  }

  const handleListItemPress = promotion => {
    setState({ ...state, modalVisible: true, selectedPromotion: promotion });
  }

  const toggleModal = () => {
    setState({ ...state, modalVisible: !state.modalVisible })
  };

  return (
    <View>
      {/* Header */}
      <Header
        placement="left"
        backgroundColor={constants.colors.secondary}
        leftComponent={{
          text: 'Promotions',
          style: { color: '#fff', fontWeight: 'bold' },
        }}
        rightComponent={{
          text: `${state.promotions.length} Availables`,
          style: { color: '#fff' },
        }}
      />
      {/* List with all active promotions */}
      {state.promotions.map((promotion, i) => (
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
        isVisible={state.modalVisible}
        toggle={toggleModal}
        promotion={state.selectedPromotion}
        color={constants.colors.secondary}
      />
      {/* Loading spinner when data are fetch */}
      <LoadingSpinner loading={state.loading} />
    </View>
  )
}

export default PromotionsList
