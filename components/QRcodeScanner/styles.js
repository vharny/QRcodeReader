import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  scanText: {
    marginTop: '25%',
    fontSize: 32
  },
  scanArrow: {
    marginTop: '5%',
    fontSize: 48,
  },
  activityIndicator: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;