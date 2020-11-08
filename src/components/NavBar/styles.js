import styled from "styled-components";
import { AppBar } from "@material-ui/core";

export const AppbarStyled = styled(AppBar)`
  height: 8vh;
  display: flex;
  justify-content: flex-end;
  padding: 0 1vw;
`;

export const DivGrow = styled.div`
  flex-grow: 1;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 20vw;
`;
