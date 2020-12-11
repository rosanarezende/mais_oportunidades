import styled from "styled-components";
import { AppBar, Menu } from "@material-ui/core";
import degrade from "../../assets/degrade.svg";

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

export const MenuStyled = styled(Menu)`
  .MuiPaper-root {
    background: url(${degrade}) no-repeat;
    background-size: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 0 10px;
    div {
      background: #fff;
      border-radius: 16px;
    }
    li {
      padding: 12px 32px;
    }
  }
`;
