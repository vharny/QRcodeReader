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
  }
});

export default styles;