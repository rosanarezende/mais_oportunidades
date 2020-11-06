import { Typography, Button } from "@material-ui/core";
import {
  Img,
  Content,
  Search,
  SearchField,
  Bottom,
  ImgContent,
  Text,
} from "./styles";

import bottom from "../../assets/curve.png";

import NavBar from "../../components/NavBar";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <ImgContent>
        <Img
          src="https://cdn.pixabay.com/photo/2019/06/18/08/05/pride-4281709_1280.jpg"
          alt="fundo-temporário"
        />
        <Bottom src={bottom} alt="curva" />
      </ImgContent>
      <Content>
        <Search>
          <Text>BUSQUE POR VAGAS</Text>
          <SearchField color="primary" variant="outlined" />
          <Button variant="contained" color="primary">
            Buscar
          </Button>
        </Search>

        <div>
          <Typography variant="h6" gutterBottom>
            Lorem Ipsun
          </Typography>
          <Typography variant="body1">
            Tempor tempor pariatur eu deserunt ullamco. Magna qui ullamco tempor
            aute. Incididunt cillum dolor fugiat duis excepteur proident enim
            veniam nostrud exercitation adipisicing. Pariatur tempor sunt
            deserunt minim qui irure eiusmod cillum magna deserunt adipisicing
            in proident.
          </Typography>
        </div>
      </Content>
    </>
  );
}
