import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../utils";

import logo from "../../assets/Logo-01.png";
import loginIcon from "../../assets/login-icon.png";

import { Toolbar, Button, MenuItem } from "@material-ui/core";
import { AppbarStyled, Logo, DivGrow, ButtonsBox, MenuStyled } from "./styles";
import CadastroCandidato from "./CadastroCandidato";
import CadastroRecrutador from "./CadastroRecrutador";

export default function NavBar() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCandidato, setOpenCandidato] = useState(false)
  const [openRecrutador, setOpenRecrutador] = useState(false)

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  const cadastrarRecrutador = () => {
    setAnchorEl(null);
    setOpenRecrutador(true)
  };

  const cadastrarCandidato = () => {
    setAnchorEl(null);
    setOpenCandidato(true)
  };

  return (
    <AppbarStyled position="static" color="inherit">
      <Toolbar>
        <Logo
          src={logo}
          alt="Logo +oportunidades"
          onClick={() => dispatch(push(routes.home))}
        />
        <DivGrow />
        <ButtonsBox>
          {/* <Button color="inherit" onClick={() => dispatch(push(routes.sobre))}>
            Sobre
          </Button> */}
          {/* <Button color="inherit" onClick={() => dispatch(push(routes.vagas))}>
            Sou Recrutador
          </Button> */}
          <Button
            color="inherit"
            onClick={openMenu}
            aria-controls="simple-menu"
            aria-haspopup="true"
          >
            Cadastro
          </Button>
          <MenuStyled
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <div>
              <MenuItem onClick={cadastrarRecrutador}>Recrutador</MenuItem>
              <MenuItem onClick={cadastrarCandidato}>Candidato</MenuItem>
            </div>
          </MenuStyled>
          <CadastroCandidato 
            openCandidato={openCandidato} 
            setOpenCandidato={setOpenCandidato} 
          />
          <CadastroRecrutador 
            openRecrutador={openRecrutador}
            setOpenRecrutador={setOpenRecrutador}
          />

          {/* ================ */}

          <Button
            color="inherit"
            // onClick={() => dispatch(push(routes.login))}
            startIcon={<img src={loginIcon} 
            alt="ícone de login" 
          />}
          >
            Login
          </Button>
        </ButtonsBox>
      </Toolbar>
    </AppbarStyled>
  );
}
