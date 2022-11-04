import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "blue",
    fontSize: 32,
  },
  subtitulo: {
    color: "#f00",
    fontSize: 24,
  },
  um: {
    paddingTop: 20,
    backgroundColor: "salmon",
    flex: 2,
    width: "100%",
  },
  dois: {
    width: "100%",
    backgroundColor: "green",
    flex: 3,
  },
});

export default estilos;
