import React from 'react'
import { ActivityIndicator } from 'react-native'
import styles from './styles'
import { Overlay } from 'react-native-elements'

const LoadingSpinner = ({ loading }) => {
  return (
    <Overlay
      testID="loading"
      isVisible={loading}
      fullScreen
      overlayStyle={styles.overlay}
    >
      <ActivityIndicator
        style={styles.activityIndicator}
        size="large"
        color="white"
      />
    </Overlay>
  )
}

export default LoadingSpinner
