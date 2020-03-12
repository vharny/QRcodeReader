import React from "react";
import { Overlay, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

const Modal = ({ isVisible, setVisible }) => {
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(255, 255, 255, .5)"
      onBackdropPress={() => setVisible(!isVisible)}
      width="90%"
      height="75%"
    >
      <Button
        icon={<Icon name="undo" size={15} color="white" />}
        title=" Scan QRcode"
        buttonStyle={{ backgroundColor: '#20B4BA' }}
      />
    </Overlay>
  );
};

export default Modal;
