import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";

export const ImgContent = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 70vh;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Bottom = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const Content = styled.div`
  margin: -100px 150px 10px;
`;

export const Search = styled.div`
  display: flex;
  width: 55%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

export const Text = styled(Button)`
  cursor: default;
  font-size: 18px;
  font-weight: bold;
  :hover {
    background-color: transparent;
  }
`;

export const SearchField = styled(TextField)`
  width: 50%;
`;


