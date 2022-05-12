import React from "react";
import { View, Text, TextInput } from "react-native";
import {} from "react-native-gesture-handler";
import { theme } from "../../theme";

import { styles } from "./styles";

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>Feito com ♥ por NycolasSM</Text>
    </View>
  );
}
