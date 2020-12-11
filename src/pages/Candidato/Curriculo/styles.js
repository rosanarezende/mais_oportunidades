import styled from "styled-components";
import { Paper } from "@material-ui/core";
import degrade from "../../../assets/degrade.svg";

export const PageContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 82vh;
  padding: 0 12vw;

  @media screen and (max-width: 600px) {
    padding: 0 8vw;
  }
  @media screen and (max-width: 400px) {
    padding: 0 5vw;
  }
`;

export const PaperStyled = styled(Paper)`
  background: url(${degrade}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  form {
    background: #fff;
    border: 3px solid #000000;
    border-radius: 16px;
    border-bottom-right-radius: 11vw;
    padding: 4vh 50px 12vh;
    margin: 15px;

    @media screen and (max-width: 1200px) {
      border-bottom-right-radius: 16vw;
      padding: 4vh 40px 10vh;
    }
    @media screen and (max-width: 800px) {
      border-bottom-right-radius: 18vw;
      padding: 4vh 30px 8vh;
    }
    @media screen and (max-width: 600px) {
      padding: 4vh 20px 5vh;
    }
    @media screen and (max-width: 400px) {
      padding: 4vh 10px 5vh;
    }

    /* #inputs {
      margin: 2vh 0 3vh;
    }

    #button-wrapper {
      display: flex;
      justify-content: center;
    } */
  }
`;
