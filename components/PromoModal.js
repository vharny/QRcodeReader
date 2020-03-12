import React from 'react';
import { Modal, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const PromoModal = ({ scanned, setScanned }) => {
	return (
		<View>
			<Modal
				animationType="slide"
				transparent={false}
				visible={scanned}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.');
				}}>
				<View style={{ marginTop: 22 }}>
					<View>
						<Text>Hello World!</Text>

						{/* <TouchableHighlight
							onPress={() => {
								setModalVisible(!modalVisible);
							}}>
							<Text>Hide Modal</Text>
						</TouchableHighlight> */}
					</View>
					<Button
						title=" Scan QR Code again"
						icon={
							<Icon
								name="qrcode"
								size={15}
								color="white"
							/>
						}
						onPress={() => setScanned(!scanned)}
					/>
				</View>
			</Modal>

			{/* <TouchableHighlight
				onPress={() => {
					setModalVisible(true);
				}}>
				<Text>Show Modal</Text>
			</TouchableHighlight> */}
		</View>
	)
}

export default PromoModal;