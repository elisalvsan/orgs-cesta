import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Texto from "../components/Texto";

export default function Botao({ texto, onPress, style }) {
  return (
    <>
      <TouchableOpacity style={[style, estilos.botao]} onPress={onPress}>
        <Texto style={estilos.textoBotao}>{texto}</Texto>
      </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
