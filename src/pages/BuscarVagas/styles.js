import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const PageContent = styled.div`
  display: flex;
`;

export const Top = styled.div`
  padding: 30px 0;
`;


export const FiltersWrapper = styled.div`
  background: #949191;
  border-radius: 16px;
  width: 22vw;
  margin-right: 2vw;
  padding: 10px;

  @media screen and (max-width: 1200px) {
    width: 32vw;
  }
`;

export const FiltersContent = styled.div`
  background: #ffffff;
  border-radius: 16px;
  border-bottom-right-radius: 11vw;
  padding: 4vh 15px 20vh;
  height: 100%;
  min-height: 46vh;

  display: flex;
  flex-direction: column;
`;

export const FilterBox = styled.div`
  margin-bottom: 2.5vh;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-end;
`;

export const ResultWrapper = styled.div`
  width: 72vw;
  @media screen and (max-width: 1200px) {
    width: 60vw;
  }
`;

export const VacancyWrapper = styled.div`
  width: 100%;
  background: #c4c4c4;
  border-radius: 16px;
  padding: 25px;
  margin-bottom: 1vh;

  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 116px;
  height: 90px;
  object-fit: cover;
  margin-right: 1vw;
`;

export const VacancyContent = styled.div`
  flex-grow: 1;
  height: 100%;
`;

export const FactoryName = styled(Typography)`
  padding-bottom: 10px;
`;

export const EmailWrapper = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;
