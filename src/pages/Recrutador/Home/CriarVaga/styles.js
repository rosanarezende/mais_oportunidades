import styled from "styled-components";
import { Paper } from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import degrade from "../../../../assets/degrade.svg";

export const PaperStyled = styled(Paper)`
  background: url(${degrade}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 15px;
  width: 100%;
`;

export const Form = styled.form`
  background: #fff;
  border: 3px solid #000000;
  border-radius: 16px;
  border-bottom-right-radius: 8vw;
  padding: 3vh 50px 8vh;

  @media screen and (max-width: 1200px) {
    padding: 3vh 40px 6vh;
  }
  @media screen and (max-width: 800px) {
    padding: 3vh 30px 5vh;
  }
  @media screen and (max-width: 600px) {
    padding: 3vh 20px;
  }

  #inputs {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 2vh;
    gap: 10px;
    @media screen and (max-width: 1200px) {
      gap: 5px;
    }
    @media screen and (max-width: 900px) {
      gap: 10px;
    }
  }

  .dez {
    width: 16%;
  }
  .vinte {
    width: 20%;
  }
  .trinta {
    width: 27%;
  }
  .quarenta {
    width: 40%;
  }
  .sessenta {
    width: 59%;
  }
  .setenta {
    width: 72%;
  }
  .dez,
  .vinte,
  .trinta,
  .quarenta,
  .sessenta,
  .setenta {
    margin-bottom: 0.5vh;
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  #button-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
  }
`;

export const Top = styled.div`
  margin: 10px 0 20px;
`;

export const ChipInputStyled = styled(ChipInput)`
  input {
    text-align: center;
  }
`;
