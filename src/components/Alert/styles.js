import styled from "styled-components";
import { Dialog, IconButton } from "@material-ui/core";
import degrade from "../../assets/degrade.svg";

export const DialogStyled = styled(Dialog)`
  .MuiPaper-root {
    background: url(${degrade}) no-repeat;
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    > div {
      background: #fff;
      border: 3px solid #000000;
      border-radius: 16px;
      padding: 45px 30px 30px;
      margin: 15px;
    }

    .MuiDialogContent-root {
      @media screen and (max-width: 800px) {
        padding: 10px 5px 2px;
      }
    }
  }
`;

export const CloseIcon = styled(IconButton)`
  position: absolute;
  right: 15px;
  top: 15px;
  color: grey;
`;
