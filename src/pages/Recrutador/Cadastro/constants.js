import { InputAdornment } from "@material-ui/core";

export const textFieldsContent = (
  hidenPassword,
  setHidenPassword,
  hidenConfirm,
  setHidenConfirm
) => [
  {
    name: "nome",
    placeholder: "NOME SOCIAL",
    type: "text",
    pattern: "[a-zA-Zà-úÀ-ú0-9 ]{3,}",
    title: "O nome deve conter apenas letras ou números, no mínimo de 3",
  },
  { name: "email", placeholder: "EMAIL", type: "email" },
  {
    name: "senha",
    placeholder: "SENHA",
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
  },
  {
    name: "confirmacao",
    type: hidenConfirm ? "text" : "password",
    placeholder: "CONFIRME A SENHA ANTERIOR",
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
  },
  { name: "telefone", placeholder: "TELEFONE", type: "number" }, // trocar isso
];
