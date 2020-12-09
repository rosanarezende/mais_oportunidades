import styled from "styled-components";
import { AppBar } from "@material-ui/core";

export const AppbarStyled = styled(AppBar)`
  height: 8vh;
  display: flex;
  justify-content: center;
  padding: 0 2vw;
  background-color: #fff;
`;

export const Logo = styled.img`
  height: 4vh;
  width: auto;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    height: 3vh;
  }
`;

export const DivGrow = styled.div`
  flex-grow: 1;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 20vw;
  @media screen and (max-width: 1200px) {
    width: 40vw;
  }
  @media screen and (max-width: 800px) {
    width: 50vw;
  }
`;
