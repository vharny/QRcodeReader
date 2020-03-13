import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Modal from '../Modal/Modal';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import constants from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const QRcodeScanner = ({ isFocused }) => {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [promotion, setPromotion] = useState();

  useEffect(() => {
		getPermissionsAsync();
  }, []);

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    setHasCameraPermission({ hasCameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ data }) => {
    fetch(`${constants.api}/coupon/${data}`)
      .then(response => {
        if (response.ok) {
          setScanned(true);
          return response.json();
        }
        throw Error();
      })
      .then(res => setPromotion(res))
      .catch(err => Alert.alert('GoStyle', 'Promotion not found!'));
  }

  return (
    <View style={styles.container}>
			{/* Active BarCodeScanner only if Tab "QR Code Reader" is active */}
      {isFocused && <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
				{/* Display text indications only if QR Code is not scanned yet */}
        {!scanned && (
          <View>
            <Text style={[styles.text, styles.scanText]}>
              Scan QR Code
            </Text>
            <Icon style={[styles.text, styles.scanArrow]} name="arrow-down" />
          </View>
        )}
      </BarCodeScanner>}

      {/* Modal with promotion's informations */}
      <Modal
        isVisible={scanned}
        setVisible={setScanned}
        promotion={promotion}
        color={'#20B4BA'}
      />
    </View>
  )
}

export default QRcodeScanner;
