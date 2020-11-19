import styled from "styled-components";
import {
  IconButton,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

export const Title = styled(DialogTitle)`
  margin: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIcon = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  color: grey;
`;

export const DialogContentStyled = styled(DialogContent)`
  padding: 20px;
`;

export const DialogActionsStyled = styled(DialogActions)`
  margin: 10px;
  padding: 20px;
`;

export const Span = styled.span`
  font-weight: lighter;
  letter-spacing: 1.5px;
`;
