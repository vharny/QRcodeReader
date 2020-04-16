import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Modal from '../Modal/Modal'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Icon from 'react-native-vector-icons/FontAwesome'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import * as Permissions from 'expo-permissions'
import constants from '../../constants'
import styles from './styles'

const QRcodeScanner = ({ isFocused }) => {
  const [state, setState] = useState({
    hasCameraPermission: null,
    loading: false,
    modal: {
      type: null,
      isVisible: false,
      data: null
    }
  })

  useEffect(() => {
    getPermissionsAsync()
  }, [])

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    setState({
      ...state,
      hasCameraPermission: {
        hasCameraPermission: { hasCameraPermission: status === 'granted' },
      },
    })
  }

  handleBarCodeScanned = async ({ data }) => {
    setState({ ...state, loading: true });
    fetch(`${constants.api}/coupon/${data}`)
      .then(response => { 
        if (response.status === 404) throw Error('Promotion not found!');
        if (response.ok) return response.json();
        throw Error('Error');
      })
      .then(responseJson => {
        setState({ ...state, loading: false,
          modal: {
            type: 'promotion',
            isVisible: true,
            data: responseJson
          }
        });
      })
      .catch(err => {
        setState({
          ...state, loading: false,
          modal: {
            type: 'error',
            isVisible: true,
            data: err
          }
        });
      });
  }

  // Close modal with promotion's information
  toggleModal = () => {
    setState({
      ...state,
      modal: {
        type: null,
        isVisible: false,
        data: null
      }
    })
  }

  return (
    <View style={styles.container}>
      {/* Active BarCodeScanner only if Tab "QR Code Reader" is active */}
      {isFocused && (
        <BarCodeScanner
          onBarCodeScanned={state.modal.isVisible ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          {/* Display text indications only if QR Code is not scanned yet */}
          {!state.modal.isVisible && (
            <View>
              <Text style={[styles.text, styles.scanText]}>Scan QR Code</Text>
              <Icon style={[styles.text, styles.scanArrow]} name="arrow-down" />
            </View>
          )}
        </BarCodeScanner>
      )}

      {/* Loading spinner when data are fetch */}
      <LoadingSpinner loading={state.loading} />

      {/* Modal with promotion's informations */}
      <Modal
        modal={state.modal}
        toggle={toggleModal}
        color={constants.colors.primary}
      />
    </View>
  )
}

export default QRcodeScanner
