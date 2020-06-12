import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import QRcodeReader from '../../screens/QRcodeReader/QRcodeReader';
import Promotions from '../../screens/Promotions/Promotions';
import constants from '../../constants';

const Navigation = () => {

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="white"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
      shifting
    >
      <Tab.Screen
        name="QR Code Reader"
        component={QRcodeReader}
        options={{
          tabBarLabel: 'QR Code Reader',
          tabBarColor: constants.colors.primary,
          tabBarIcon: () => <Icon name="qrcode" size={26} color="white" />
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Promotions}
        options={{
          tabBarLabel: 'Promotions',
          tabBarColor: constants.colors.secondary,
          tabBarIcon: () => <Icon name="tags" size={26} color="white" />
        }}
      />
    </Tab.Navigator>
  );
}

export default Navigation;