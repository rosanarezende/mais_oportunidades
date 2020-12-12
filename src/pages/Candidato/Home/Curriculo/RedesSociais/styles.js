import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  /* margin-bottom: 20px; */
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  #pcd {
    width: 50%;
    min-width: 100px;
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
`;

export const CloseIcon = styled(IconButton)`
  position: absolute;
  right: 0;
  top: 0;
  color: gray;

  :hover {
    color: red;
  }
`;

export const Redes = styled.div`
  position: relative;
  padding: 0 45px 0 0;
`;

export const AddExperience = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
`;
