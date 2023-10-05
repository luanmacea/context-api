import { createContext, useState } from "react";

export const AutentificacaoContext = createContext({});

export function AutentificacaoProvider({ children }) {
  const [usuario, setUsuario] = useState({});

  function login(email, senha) {
    if (email === "123" && senha === "123") {
      setUsuario({
        nome: "luan",
        email: "luan@macea.com.br",
        endereco: "Rua Zacarias de Gois, 1350",
        telefone: "(11) 99999-9999",
      });
      return "ok";
    } else {
      return "erro";
    }
  }

  return (
    <AutentificacaoContext.Provider value={{ usuario, login }}>
      {children}
    </AutentificacaoContext.Provider>
  );
}
