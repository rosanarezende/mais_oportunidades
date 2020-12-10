import styled from "styled-components";
import { Typography, Button } from "@material-ui/core";
import degradePequeno from "../../../assets/degrade-pequeno.svg";

export const ResultWrapper = styled.div`
  width: 72vw;
  height: ${(props) => props.display && "25vh"};
  display: ${(props) => props.display && "flex"};
  align-items: ${(props) => props.display && "center"};
  justify-content: ${(props) => props.display && "center"};
  margin-bottom: 2vh;

  @media screen and (max-width: 1200px) {
    width: 60vw;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 2vh 0;
    height: ${(props) => props.display && "10vh"};
  }
`;

export const ResultZero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 10px;

  width: 72vw;
  @media screen and (max-width: 1200px) {
    width: 60vw;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 5vh 0;
  }
`;

export const VacancyWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  padding: 10px;
  margin-bottom: 1vh;

  background: url(${degradePequeno}) no-repeat;
  background-size: cover;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  > div {
    padding: 15px;
    border-radius: 16px;
    background: #fff;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 800px) {
    margin-bottom: 2vh;
  }
`;

export const Image = styled.img`
  width: 116px;
  height: 90px;
  object-fit: cover;
  margin-right: 1vw;
`;

export const VacancyContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 10px;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const DetailButton = styled(Button)`
  width: 150px;
  height: 36px;
  @media screen and (max-width: 1200px) {
    align-self: center;
  }
`;

export const FactoryName = styled(Typography)`
  padding-bottom: 10px;
`;

export const EmailWrapper = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const PaginationWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;
