import styled from "styled-components";

import { TextField } from "@material-ui/core";

export const PaperStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #c4c4c4;
  border-radius: 10px;
  padding: 30px;
`;

export const Top = styled.div`
  margin: 20px 0;
`;

export const Line1 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Line2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 20px;
`;

export const TextFieldStyled = styled(TextField)`
  background: white;
  border-radius: 6px;
`;

export const ButtonsWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;
