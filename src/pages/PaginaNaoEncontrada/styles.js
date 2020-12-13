import styled from "styled-components";
import { Paper } from "@material-ui/core";
import degrade from "../../assets/degrade.svg";

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
  width: 100%;

  div {
    background: #fff;
    border: 3px solid #000000;
    border-radius: 16px;
    border-bottom-right-radius: 11vw;
    margin: 15px;
    height: 60vh;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
