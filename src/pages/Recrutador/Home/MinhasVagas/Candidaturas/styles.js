import styled from "styled-components";
import { Paper } from "@material-ui/core";
import degrade from "../../../../../assets/degrade.svg";

export const PaperStyled = styled(Paper)`
  background: url(${degrade}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 0 15px 0 0;
  margin-bottom: 5vh;
  display: flex;
  width: 100%;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const NumbersWrapper = styled.div`
  background: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  padding: 2vh 2vw;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: row;
    /* padding: 1vh 1vw; */
  }

  #number {
    font-weight: bold;
    font-size: 96px;
    line-height: 133px;
    @media screen and (max-width: 900px) {
      font-size: 52px;
      line-height: 70px;
      margin-right: 10px;
    }
  }
`;

export const ItensWrapper = styled.div`
  width: 70%;
  padding: 2vh 5vw;
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    width: 100%;
  }

  #item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1vh;
    p {
      margin: 0 10px;
    }
    @media screen and (max-width: 500px) {
      justify-content: center;
      p {
        margin: 0 20px;
      }
    }
  }
`;
