import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../utils";

import { Typography, Toolbar, Button } from "@material-ui/core";
import { AppbarStyled, DivGrow, ButtonsBox } from "./styles";

export default function NavBar() {
  const dispatch = useDispatch();

  return (
    <AppbarStyled position="static" color="transparent">
      <Toolbar>
        <Typography variant="h5" onClick={() => dispatch(push(routes.home))}>
          +Oportunidades
        </Typography>

        <DivGrow />

        <ButtonsBox>
          <Button
            color="inherit"
            onClick={() => dispatch(push(routes.sobre))}
          >
            Sobre
          </Button>
          <Button
            color="inherit"
            onClick={() => dispatch(push(routes.recrutador))}
          >
            Sou Recrutador
          </Button>
          <Button
            color="inherit"
            onClick={() => dispatch(push(routes.contato))}
          >
            Contato
          </Button>
        </ButtonsBox>
      </Toolbar>
    </AppbarStyled>
  );
}
