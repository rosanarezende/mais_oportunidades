import { Button, Typography } from "@material-ui/core";
import { PaperStyled, NumbersWrapper, ItensWrapper } from "./styles";

function Candidaturas() {
  return (
    <PaperStyled>
      <NumbersWrapper>
        <Typography id="number">19</Typography>
        <Typography variant="h1" component="p">
          CANDIDATURAS
        </Typography>
      </NumbersWrapper>
      <ItensWrapper>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div id="item">
            <Typography variant="h4" component="p">
              Fulano de Tal
            </Typography>
            <Typography variant="h4" component="p">
              email@email.com
            </Typography>
            <Button color="inherit">ver perfil</Button>
          </div>
        ))}
      </ItensWrapper>
    </PaperStyled>
  );
}

export default Candidaturas;
