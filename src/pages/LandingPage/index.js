import { useState } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { setInputSearch } from "../../actions/search";

import { routes } from "../../utils";

import bottom from "../../assets/curve.png";

import { Typography, Button, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import {
  PageWrapper,
  ImgContent,
  Img,
  Content,
  Search,
  SearchField,
  Bottom,
  Text,
} from "./styles";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function LandingPage() {
  const dispatch = useDispatch();
  const [buscar, setBuscar] = useState("");
  const [alert, setAlert] = useState(false);

  const onChangeInput = (event) => {
    setBuscar(event.target.value);
  };

  const onClickBuscar = () => {
    if (buscar === "") {
      setAlert(true);
    } else {
      dispatch(setInputSearch(buscar));
      dispatch(push(routes.buscarVagas));
      setBuscar("");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  return (
    <>
      <NavBar />
      <PageWrapper>
        <ImgContent>
          <Img
            src="https://cdn.pixabay.com/photo/2019/06/18/08/05/pride-4281709_1280.jpg"
            alt="fundo-temporário"
          />
          <Bottom src={bottom} alt="curva" />
        </ImgContent>
        <Content>
          <Search>
            <Text style={{ backgroundColor: "transparent" }}>
              BUSQUE POR VAGAS:{" "}
            </Text>
            <SearchField
              color="primary"
              variant="outlined"
              value={buscar || ""}
              onChange={onChangeInput}
              placeholder="Pesquise o cargo desejado..."
              margin="dense"
            />
            <Button variant="contained" color="primary" onClick={onClickBuscar}>
              Buscar
            </Button>
          </Search>

          <div>
            <Typography variant="h6" gutterBottom>
              Lorem Ipsun
            </Typography>
            <Typography variant="body1">
              Tempor tempor pariatur eu deserunt ullamco. Magna qui ullamco
              tempor aute. Incididunt cillum dolor fugiat duis excepteur
              proident enim veniam nostrud exercitation adipisicing. Pariatur
              tempor sunt deserunt minim qui irure eiusmod cillum magna deserunt
              adipisicing in proident.
            </Typography>
          </div>
        </Content>

        <Snackbar open={alert} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleClose}
            severity="warning"
          >
            Preencha o campo de busca para continuar!
          </MuiAlert>
        </Snackbar>
      </PageWrapper>
      <Footer />
    </>
  );
}
