import { Typography, Button } from "@material-ui/core";
import { Img, Content, Search, SearchField } from './styles'

import NavBar from "../../components/NavBar";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Img src="https://static.vecteezy.com/system/resources/previews/000/672/776/non_2x/vector-lgbt-community-together-to-freedom-and-proud.jpg" alt="fundo-temporário" />
      <Content>

        <Search>
          <Typography color="primary">BUSQUE POR VAGAS</Typography>
          <SearchField color="primary" variant="outlined"/>
          <Button variant="contained" color="primary">Buscar</Button>
        </Search>

        <div>
          <Typography variant="h6" gutterBottom>Lorem Ipsun</Typography>
          <Typography variant="body1">Tempor tempor pariatur eu deserunt ullamco. Magna qui ullamco tempor aute. Incididunt cillum dolor fugiat duis excepteur proident enim veniam nostrud exercitation adipisicing. Pariatur tempor sunt deserunt minim qui irure eiusmod cillum magna deserunt adipisicing in proident.</Typography>
        </div>

      </Content>
    </>
  );
}
