import { useState } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../../../actions/alert";

import {
  DialogActions,
  DialogContent,
  Button,
  TextField,
  Typography,
  InputAdornment,
} from "@material-ui/core";
import { DialogStyled } from "./styles";

function CadastroCandidato(props) {
  const { openCandidato, setOpenCandidato } = props;
  const dispatch = useDispatch();

  const inputsVazios = {
    nome: "",
    email: "",
    senha: "",
    confirmacao: "",
    cidade: "",
    telefone: "",
  };

  const [hidenPassword, setHidenPassword] = useState(false);
  const [hidenConfirm, setHidenConfirm] = useState(false);
  const [input, setInput] = useState(inputsVazios);

  const cadastrar = (e) => {
    e.preventDefault();
    const { cidade, confirmacao, email, nome, senha, telefone } = input;
    if (senha !== confirmacao) {
      dispatch(setAlert(true, "Senhas não conferem!"));
    } else {
      const data = {
        nome,
        email,
        senha,
        cidade,
        telefone,
      };
      console.log(data);
      // setInput(inputsVazios);
      // setOpenCandidato(false);
    }
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const inputs = [
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
    { name: "cidade", placeholder: "CIDADE/ESTADO" },
    { name: "telefone", placeholder: "TELEFONE", type: "number" }, // trocar isso
  ];

  return (
    <DialogStyled
      open={openCandidato}
      onClose={() => setOpenCandidato(false)}
      fullWidth
    >
      <form onSubmit={cadastrar}>
        <Typography variant="h3" align="center" gutterBottom>
          CADASTRO
        </Typography>

        <DialogContent>
          {inputs.map((item) => (
            <TextField
              required
              key={item.name}
              margin="dense"
              name={item.name}
              value={input[item.name] || ""}
              type={item.type}
              onChange={changeInput}
              fullWidth
              variant="outlined"
              size="small"
              placeholder={item.placeholder}
              InputProps={{
                endAdornment: item.endAdornment,
                inputProps: {
                  pattern: item.pattern,
                  title: item.title,
                  style: {
                    textAlign: "center",
                  },
                },
              }}
            />
          ))}
        </DialogContent>

        <DialogActions style={{ justifyContent: "center", marginTop: "10px" }}>
          <Button
            // onClick={cadastrar}
            type="submit"
            variant="outlined"
            color="primary"
            autoFocus
          >
            CONTINUAR
          </Button>
        </DialogActions>
      </form>
    </DialogStyled>
  );
}

export default CadastroCandidato;
