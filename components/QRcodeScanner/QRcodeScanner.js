import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Alert } from 'react-native'
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
    scanned: false,
    promotion: null,
    loading: false,
  })

  useEffect(() => {
    getPermissionsAsync();
  }, []);

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setState({
      ...state,
      hasCameraPermission: {
        hasCameraPermission: { hasCameraPermission: status === 'granted' },
      }
    });
  }

  handleBarCodeScanned = ({ data }) => {
    setState({ ...state, loading: true });
    fetch(`${constants.api}/coupon/${data}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw Error()
      })
      .then(res => {
        setState({ ...state, promotion: res, scanned: true, loading: false });
      })
      .catch(err => Alert.alert('GoStyle', 'Promotion not found!'))
  }

  const toggleModal = () => setState({ ...state, scanned: !state.scanned })

  return (
    <View style={styles.container}>
      {/* Active BarCodeScanner only if Tab "QR Code Reader" is active */}
      {isFocused && (
        <BarCodeScanner
          onBarCodeScanned={state.scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          {/* Display text indications only if QR Code is not scanned yet */}
          {!state.scanned && (
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
        isVisible={state.scanned}
        toggle={toggleModal}
        promotion={state.promotion}
        color={constants.colors.primary}
      />
    </View>
  )
}

export default QRcodeScanner
