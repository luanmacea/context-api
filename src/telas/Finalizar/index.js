import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { estilos } from "./estilos";
import { useContext } from "react";
import { TemaContext } from "../../contexts/TemaContext";
import { AutentificacaoContext } from "../../contexts/AutentificacaoContext";
import { ProdutosContext } from "../../contexts/ProdutosContext";

export default function Finalizar({ navigation }) {
  const { temaEscolhido } = useContext(TemaContext);
  const estilo = estilos(temaEscolhido);

  const { usuario } = useContext(AutentificacaoContext);

  const { quantidade, carrinho, Finalizar } = useContext(ProdutosContext);

  const valorTotal = () => {
    let total = 0;
    carrinho.forEach((item) => {
      total += item.preco;
    });
    return total;
  };

  return (
    <View style={estilo.container}>
      <StatusBar />
      {/* <View style={estilo.ViewBody}> */}
      <View style={estilo.Viewinfo}>
        <Text style={estilo.Textinfo}>Nome: {usuario?.nome}</Text>
        <Text style={estilo.Textinfo}>Endereço: {usuario?.endereco}</Text>
        <Text style={estilo.Textinfo}>Email: {usuario?.email}</Text>
        <Text style={estilo.Textinfo}>Telefone: {usuario?.telefone}</Text>
      </View>
      <Text style={estilo.Textinforesumo}>Quantidade: {quantidade}</Text>
      <Text style={estilo.Textinforesumo}>Preço: {valorTotal()}</Text>
      <TouchableOpacity style={estilo.botao} onPress={() => Finalizar(teste())}>
        <Text style={estilo.botaoTexto}>Finalizar</Text>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
}
