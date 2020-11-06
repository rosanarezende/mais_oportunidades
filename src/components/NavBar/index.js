import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../utils";

import { AppBar, Typography } from "@material-ui/core";
import { DivGrow, ToolbarStyled, ButtonStyled } from "./styles";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <AppBar position="static" color="transparent">
      <ToolbarStyled>
        <Typography variant="h5" onClick={() => dispatch(push(routes.home))}>
          +Oportunidades
        </Typography>
        <DivGrow />
        <ButtonStyled
          color="inherit"
          onClick={() => dispatch(push(routes.sobre))}
        >
          Sobre
        </ButtonStyled>
        <ButtonStyled
          color="inherit"
          onClick={() => dispatch(push(routes.recrutador))}
        >
          Sou Recrutador
        </ButtonStyled>
        <ButtonStyled
          color="inherit"
          onClick={() => dispatch(push(routes.contato))}
        >
          Contato
        </ButtonStyled>
      </ToolbarStyled>
    </AppBar>
  );
}
