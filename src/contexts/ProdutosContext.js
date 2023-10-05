import { createContext, useEffect, useState } from "react";
import { salvarProduto, pegarProdutos, limparProdutos } from "../servicos/requisicoes/produtos";

export const ProdutosContext = createContext({});

export function ProdutosProvider({ children }) {
  const [quantidade, setQuantidade] = useState(0);
  const [carrinho, setCarrinho] = useState([]);
  const [ ultimosVistos, setUltimosVistos] = useState([]);

  useEffect(() => {
    const produto = async () => {
      const resultado = await pegarProdutos();
      setCarrinho(resultado);
      setQuantidade(resultado.length);
    }
    produto();
  }, [])

  async function viuProduto(produto) {
    setQuantidade(quantidade + 1);

    const resultado = await salvarProduto(produto);
    let novoCarrinho = carrinho;
    novoCarrinho.push(resultado);
    setCarrinho(novoCarrinho);

    let novoUltimosVistos= new Set(ultimosVistos)
    novoUltimosVistos.add(produto)
    setUltimosVistos([...novoUltimosVistos])
  }

  async function Finalizar() {
    const resultado = await limparProdutos();
    setCarrinho(resultado);
    setQuantidade(0);
  }

  return (
    <ProdutosContext.Provider
      value={{
        quantidade,
        carrinho,
        ultimosVistos,
        viuProduto,
        Finalizar
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
}
