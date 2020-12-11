import styled from "styled-components";
import { IconButton } from "@material-ui/core";

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
`;

export const Dates = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media screen and (max-width: 1400px) {
    div {
      gap: 0;
    }
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
`;

export const Experience = styled.div`
  position: relative;
  padding: 40px 20px;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  #outros {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 10px;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
    #outros {
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

export const AddExperience = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
