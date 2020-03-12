import React from 'react';
import { StatusBar } from 'react-native';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';

const Promotions = () => {

  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman'
    }
  ];

  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ bottom: 'never' }}>
      <View style={{ marginTop: StatusBar.currentHeight }}>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              bottomDivider
            />
          ))
        }
      </View>
    </SafeAreaView>
  )
}

export default Promotions
