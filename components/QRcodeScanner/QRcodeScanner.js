import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Modal from '../Modal/Modal';
import { BarCodeScanner } from 'expo-barcode-scanner'
import * as Permissions from 'expo-permissions';
import styles from './styles';

const QRcodeScanner = () => {
	const [hasCameraPermission, setHasCameraPermission] = useState(null);
	const [scanned, setScanned] = useState(false);

	useEffect(() => {
		getPermissionsAsync();
	}, []);

	getPermissionsAsync = async () => {
		const { status } = await Permissions.askAsync(Permissions.CAMERA);
		setHasCameraPermission({ hasCameraPermission: status === 'granted' });
	};

	handleBarCodeScanned = ({ type, data }) => {
		setScanned(true);
	}

	return (
		<View style={styles.container}>
			<BarCodeScanner
				onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				style={StyleSheet.absoluteFillObject}
			>
				<Text style={styles.scanText}>
					Scan QR Code
				</Text>
			</BarCodeScanner>

			{/* MODAL WITH PROMOTIONAL INFORMATIONS */}
			<Modal isVisible={scanned} setVisible={setScanned} />
		</View>
	);
}

export default QRcodeScanner;
