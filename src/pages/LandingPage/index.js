import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { routes } from "../../utils";
import { setInputSearch } from "../../actions/search";

import bottom from "../../assets/curve.png";
import background from "../../assets/landing.svg";

import { Typography, Button } from "@material-ui/core";
import {
  PageWrapper,
  ImgContent,
  Img,
  Content,
  Search,
  StyledInput,
  Bottom,
  Text,
  WhoWrapper,
} from "./styles";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [buscar, setBuscar] = useState("");

  const onClickBuscar = () => {
    dispatch(setInputSearch(buscar));
    dispatch(push(routes.buscarVagas));
    setBuscar("");
  };

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
              onChange={(e) => setBuscar(e.target.value)}
              placeholder="Pesquise por cargo, área ou empresa"
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
      </PageWrapper>
      <Footer />
    </>
  );
}
