import styled from "styled-components";

export const PageContent = styled.div`
  display: flex;
  padding-top: 10vh;
`;

export const FiltersWrapper = styled.div`
  background: #949191;
  border-radius: 16px;
  width: 22vw;
  margin-right: 2vw;
  padding: 10px;
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
  justify-content: space-between;
  padding-left: 55%;
`;

export const ResultWrapper = styled.div`
  margin-top: 5vh;
  width: 72vw;
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
  height: 79px;
  object-fit: cover;
  margin-right: 1vw;
`;

export const VacancyContent = styled.div`
  flex-grow: 1;
  height: 100%;
`;
