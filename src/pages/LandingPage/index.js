import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { setInputSearch } from "../../actions/search";

import { routes } from "../../utils";

import bottom from "../../assets/curve.png";
import background from "../../assets/landing.svg";

import { Typography, Button
  // , Snackbar 
} from "@material-ui/core";
// import MuiAlert from "@material-ui/lab/Alert";
import {
  PageWrapper,
  ImgContent,
  Img,
  Content,
  Search,
  StyledInput,
  Bottom,
  Text,
  WhoWrapper
} from "./styles";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [buscar, setBuscar] = useState("");
  // const [alert, setAlert] = useState(false);

  const onChangeInput = (event) => {
    setBuscar(event.target.value);
  };

  const onClickBuscar = () => {
    // if (buscar === "") {
    //   setAlert(true);
    // } 
    // else {
      dispatch(setInputSearch(buscar));
      dispatch(push(routes.buscarVagas));
      setBuscar("");
    // }
  };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setAlert(false);
  // };

  return (
    <>
      <NavBar />
      <PageWrapper>
        <ImgContent>
          <Img src={background} alt="imagem de fundo" />
          <Bottom src={bottom} alt="curva" />
        </ImgContent>
        <Content>
          <Search>
            <Text style={{ backgroundColor: "transparent" }}>
              BUSQUE POR VAGAS:
            </Text>
            <StyledInput
              color="primary"
              variant="outlined"
              value={buscar || ""}
              onChange={onChangeInput}
              placeholder="Pesquise o cargo desejado..."
              margin="dense"

            />
            <Button variant="outlined" color="primary" onClick={onClickBuscar}>
              Buscar
            </Button>
          </Search>

          <WhoWrapper>
            <Typography variant="h2" gutterBottom>
              QUEM SOMOS
            </Typography>
            <Typography variant="h5" component="body1">
              Somos uma plataforma de intermediação exclusiva para a comunidade
              LGBTQ+, que conecta esses profissionais a empresas comprometidas
              em receber e acolhe-los através de vagas inclusivas.
            </Typography>
          </WhoWrapper>

        </Content>

        {/* <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="warning"
          >
            Preencha o campo de busca para continuar!
          </MuiAlert>
        </Snackbar> */}

      </PageWrapper>
      <Footer />
    </>
  );
}
