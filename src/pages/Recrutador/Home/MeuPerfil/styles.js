import styled from "styled-components";
import { Paper } from "@material-ui/core";
import degrade from "../../../../assets/degrade.svg";

export const Top = styled.div`
  margin: 10px 0 20px;
`;

export const PaperStyled = styled(Paper)`
  background: url(${degrade}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 15px;
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

  #content-wrapper {
    display: flex;
    width: 100%;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }

    #img-wrapper {
      width: 30%;
      @media screen and (max-width: 900px) {
        width: 100%;
      }

      img {
        margin: auto;
        width: 90%;
        @media screen and (max-width: 900px) {
          width: 50%;
        }
      }
    }

    #inputs-wrapper {
      width: 70%;
      @media screen and (max-width: 900px) {
        width: 100%;
      }

      #inputs {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 2vh;
        gap: 15px;

        .sessenta {
          width: 59%;
          @media screen and (max-width: 900px) {
            width: 100%;
          }
        }
        .quarenta {
          width: 38%;
          @media screen and (max-width: 900px) {
            width: 100%;
          }
        }
      }
    }
  }

  #button-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;
