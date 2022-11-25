import React from "react";
import { IRAMProps, IRickAndMorty } from "../../screens/Home";
import {
  Container,
  ImageContainer,
  ImageContainerPai,
  InfoContainer,
  NameContainer,
  StatsGenderContainer,
  StatsSpeciesContainer,
  StatsStatusContainer,
} from "./style";

const Card = ({ data }: IRAMProps) => {
  return (
    <Container>
      <ImageContainerPai>
        <ImageContainer />
      </ImageContainerPai>
      <InfoContainer>
        <NameContainer>{data && data[0].name}</NameContainer>
        <StatsGenderContainer>Gender</StatsGenderContainer>
        <StatsStatusContainer>Status</StatsStatusContainer>
        <StatsSpeciesContainer>Species</StatsSpeciesContainer>
      </InfoContainer>
    </Container>
  );
};

export default Card;
