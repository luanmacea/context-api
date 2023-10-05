import Rotas from "./src/rotas";
import { TemaProvider } from "./src/contexts/TemaContext";
import { AutentificacaoProvider } from "./src/contexts/AutentificacaoContext";
import { ProdutosProvider } from "./src/contexts/ProdutosContext";

export default function App() {
  return (
    <TemaProvider>
      <AutentificacaoProvider>
        <ProdutosProvider>
          <Rotas />
        </ProdutosProvider>
      </AutentificacaoProvider>
    </TemaProvider>
  );
}
