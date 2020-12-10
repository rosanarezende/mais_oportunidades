import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../routes";

import logo from "../../assets/Logo-01.png";
import loginIcon from "../../assets/login-icon.png";

import { Toolbar, Button, MenuItem } from "@material-ui/core";
import { AppbarStyled, Logo, DivGrow, ButtonsBox, MenuStyled } from "./styles";

export default function NavBar() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const openMenu = (event) => setAnchorEl(event.currentTarget);

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
              <MenuItem
                onClick={() => dispatch(push(routes.cadastroRecrutador))}
              >
                Recrutador
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(push(routes.cadastroCandidato))}
              >
                Candidato
              </MenuItem>
            </div>
          </MenuStyled>

          {/* ================ */}

          <Button
            color="inherit"
            // onClick={() => dispatch(push(routes.login))}
            startIcon={<img src={loginIcon} alt="ícone de login" />}
          >
            Login
          </Button>
        </ButtonsBox>
      </Toolbar>
    </AppbarStyled>
  );
}
