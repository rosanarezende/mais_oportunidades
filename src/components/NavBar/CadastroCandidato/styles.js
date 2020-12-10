import styled from "styled-components";
import { Dialog } from "@material-ui/core";
import degrade from "../../../assets/degrade.png";

export const DialogStyled = styled(Dialog)`
  .MuiPaper-root {
    background: url(${degrade}) no-repeat;
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border-radius: 26px;

    form {
      background: #fff;
      border: 3px solid #000000;
      border-radius: 16px;
      border-bottom-right-radius: 11vw;
      padding: 3vh 15px;
      margin: 10px 15px;
      @media screen and (max-width: 800px) {
        margin-bottom: 20px;
      }
    }
    .MuiDialogContent-root {
      @media screen and (max-width: 800px) {
        padding: 8px 5px;
      }
    }
  }
`;
