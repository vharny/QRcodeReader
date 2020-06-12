import React from "react";
import { Overlay, Button } from "react-native-elements";
import Promotion from "./Promotion/Promotion";
import Error from "./Error/Error";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const Modal = ({ modal, toggle, color }) => {
  return (
    <Overlay
      isVisible={modal.isVisible}
      height="50%"
      onBackdropPress={() => toggle()}
      height="auto"
    >
      <View style={{ alignItems: "center" }}>
        <View testID="promotion">
          {modal.type === "error" && <Error modal={modal} toggle={toggle}/>}
          {modal.type === "promotion" && (
              <Promotion  modal={modal} toggle={toggle} color={color}/>
          )}
        </View>
        <Button
          icon={<Icon name="undo" size={15} color="white"/>}
          title=" Go Back"
          buttonStyle={{ backgroundColor: color }}
          containerStyle={styles.button}
          onPress={() => toggle()}
        />
      </View>
    </Overlay>
  );
};

export default Modal;
