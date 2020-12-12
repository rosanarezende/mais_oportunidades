import { InputAdornment } from "@material-ui/core";

export const dadosContent = [
  {
    name: "nome",
    label: "NOME SOCIAL",
    type: "text",
    pattern: "[a-zA-Zà-úÀ-ú0-9 ]{3,}",
    title: "O nome deve conter apenas letras ou números, no mínimo de 3",
    shrink: true,
    className: "one",
  },
  {
    name: "cpf",
    label: "CPF",
    type: "text",
    disabled: true,
    shrink: true,
    className: "two",
  },
  {
    name: "nascimento",
    label: "DATA DE NASCIMENTO",
    type: "date",
    shrink: true,
    className: "two",
  },
];

export const enderecoContent = [
  {
    name: "cep",
    label: "CEP",
    type: "text",
    className: "four",
    // required: true,
    // shrink: true,
  },
  {
    name: "logradouro",
    label: "LOGRADOURO",
    type: "text",
    className: "two",
    // required: true,
    // shrink: true,
  },
  {
    name: "numero",
    label: "NÚMERO",
    type: "text",
    className: "four",
    // required: true,
    // shrink: true,
  },
  {
    name: "bairro",
    label: "BAIRRO",
    type: "text",
    className: "three",
    // required: true,
    // shrink: true,
  },
  {
    name: "cidade",
    label: "CIDADE",
    type: "text",
    className: "three",
    // required: true,
    // shrink: true,
  },
  {
    name: "estado",
    label: "ESTADO",
    type: "text",
    className: "three",
    // required: true,
    // shrink: true,
  },
];

export const acessoContent = (
  hidenOldPassword,
  setHidenOldPassword,
  hidenPassword,
  setHidenPassword,
  hidenConfirm,
  setHidenConfirm
) => [
  {
    name: "email",
    label: "EMAIL",
    type: "email",
    className: "two",
    required: true,
    shrink: true,
  },
  {
    name: "senhaAtual",
    label: "SENHA ATUAL",
    type: hidenOldPassword ? "text" : "password",
    pattern: ".{6,}",
    title: `Sua senha deve conter no mínimo 6 caracteres`,
    endAdornment: (
      <InputAdornment position="end">
        <img
          onClick={() => setHidenOldPassword(!hidenOldPassword)}
          src={
            hidenOldPassword
              ? "https://user-images.githubusercontent.com/45580434/84558424-2842d180-ad09-11ea-8377-cc34a14d02df.png"
              : "https://user-images.githubusercontent.com/45580434/84558461-60e2ab00-ad09-11ea-9c26-aec40d92e425.png"
          }
          alt="password"
          style={{ cursor: "pointer" }}
        />
      </InputAdornment>
    ),
    className: "two",
    required: true,
  },
  {
    name: "novaSenha",
    label: "NOVA SENHA",
    type: hidenPassword ? "text" : "password",
    pattern: ".{6,}",
    title: `Sua senha deve conter no mínimo 6 caracteres`,
    endAdornment: (
      <InputAdornment position="end">
        <img
          onClick={() => setHidenPassword(!hidenPassword)}
          src={
            hidenPassword
              ? "https://user-images.githubusercontent.com/45580434/84558424-2842d180-ad09-11ea-8377-cc34a14d02df.png"
              : "https://user-images.githubusercontent.com/45580434/84558461-60e2ab00-ad09-11ea-9c26-aec40d92e425.png"
          }
          alt="password"
          style={{ cursor: "pointer" }}
        />
      </InputAdornment>
    ),
    className: "two",
  },
  {
    name: "confirmacao",
    type: hidenConfirm ? "text" : "password",
    label: "CONFIRME A SENHA ANTERIOR",
    pattern: ".{6,}",
    title: `Sua senha deve conter no mínimo "6" caracteres`,
    endAdornment: (
      <InputAdornment position="end">
        <img
          onClick={() => setHidenConfirm(!hidenConfirm)}
          src={
            hidenConfirm
              ? "https://user-images.githubusercontent.com/45580434/84558424-2842d180-ad09-11ea-8377-cc34a14d02df.png"
              : "https://user-images.githubusercontent.com/45580434/84558461-60e2ab00-ad09-11ea-9c26-aec40d92e425.png"
          }
          alt="password"
          style={{ cursor: "pointer" }}
        />
      </InputAdornment>
    ),
    className: "two",
  },
];
