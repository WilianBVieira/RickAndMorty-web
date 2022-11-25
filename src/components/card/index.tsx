import React from "react";
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

const Card = () => {
  return (
    <Container>
      <ImageContainerPai>
        <ImageContainer />
      </ImageContainerPai>
      <InfoContainer>
        <NameContainer>Rick sanchez</NameContainer>
        <StatsGenderContainer>Gender</StatsGenderContainer>
        <StatsStatusContainer>Status</StatsStatusContainer>
        <StatsSpeciesContainer>Species</StatsSpeciesContainer>
      </InfoContainer>
    </Container>
  );
};

export default Card;
