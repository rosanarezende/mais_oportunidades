import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../utils";

import logo from "../../assets/Logo-01.png";

import { Toolbar, Button } from "@material-ui/core";
import { AppbarStyled, Logo, DivGrow, ButtonsBox } from "./styles";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <AppbarStyled position="static" color="transparent">
      <Toolbar>
        <Logo
          src={logo}
          alt="Logo +oportunidades"
          onClick={() => dispatch(push(routes.home))}
        />

        <DivGrow />

        <ButtonsBox>
          <Button color="inherit" onClick={() => dispatch(push(routes.sobre))}>
            Sobre
          </Button>
          <Button color="inherit" onClick={() => dispatch(push(routes.vagas))}>
            Sou Recrutador
          </Button>
          <Button
            color="inherit"
            onClick={() => dispatch(push(routes.cadastro))}
          >
            Cadastro
          </Button>
          <Button
            color="inherit"
            onClick={() => dispatch(push(routes.login))}
          >
            Login
          </Button>
        </ButtonsBox>
      </Toolbar>
    </AppbarStyled>
  );
}
