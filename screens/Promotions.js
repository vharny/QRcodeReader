import React from "react";
import { View } from "react-native";
import { Header } from "react-native-elements";
import PromotionsList from "../components/PromotionsList/PromotionsList";

const Promotions = () => {
  return (
    <View>
      <Header
        placement="left"
        backgroundColor="#ff99ff"
        leftComponent={{
          text: "Promotions",
          style: { color: "#fff", fontWeight: "bold" }
        }}
        rightComponent={{ text: "17 Availables", style: { color: "#fff" } }}
      />
      <PromotionsList />
    </View>
  );
};

export default Promotions;
