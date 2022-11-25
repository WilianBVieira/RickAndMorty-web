import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 200px;
  width: 300px;
`;

export const ImageContainerPai = styled.div`
  background-color: purple;
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ImageContainer = styled.image`
  background-color: blue;
  width: 85%;
  height: 50%;
`;

export const InfoContainer = styled.div`
  background-color: yellow;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NameContainer = styled.text`
  background-color: green;
  height: 20%;
  width: 90%;
  padding-top: 10px;
`;

export const StatsGenderContainer = styled.text`
  background-color: grey;
  height: 13%;
  width: 90%;
`;

export const StatsStatusContainer = styled.text`
  background-color: black;
  height: 13%;
  width: 90%;
`;

export const StatsSpeciesContainer = styled.text`
  background-color: brown;
  height: 13%;
  width: 90%;
`;
