import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Img = styled.img`
  width: 100%;
`;

export const Content = styled.div`
  margin: 30px 100px;
`;

export const Search = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const SearchField = styled(TextField)`
  width: 50%;
`;
