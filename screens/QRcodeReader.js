import React from 'react'
import { useIsFocused } from '@react-navigation/native'
import QRcodeScanner from '../components/QRcodeScanner/QRcodeScanner'

const QRcodeReader = () => {
  const isFocused = useIsFocused();
  return <QRcodeScanner isFocused={isFocused} />
}

export default QRcodeReader
