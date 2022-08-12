import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleEntrar = (e: any) => {
    e.preventDefault();
    console.log(email + senha);
  };
  return (
    <div>
      <form>
        <label htmlFor="email">
          <span>Email: </span>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label htmlFor="senha">
          <span>Senha: </span>
          <input
            type="password"
            name="senha"
            id="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </label>
        <button type="submit" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
};
