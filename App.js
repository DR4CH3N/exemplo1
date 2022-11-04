import { View, Text, StatusBar, Button } from "react-native";
import estilos from "./estilos";

export default function App() {
  return (
    <View style={estilos.container}>
      {/* <StatusBar /> */}
      <View style={estilos.um}>
        <Text style={estilos.titulo}>React Native</Text>
      </View>
      <View style={estilos.dois}>
        <Text style={estilos.subtitulo}>trabalhando com dev de apps</Text>
      </View>
      <Button title="Toca ai mano!" />
    </View>
  );
}
