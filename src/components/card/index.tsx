import React from "react";
import { IRAMProps } from "../../screens/Home";
import {
  Container,
  ImageContainer,
  ImageContainerPai,
  Img,
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
        <ImageContainer>
          <Img src={data && data[0].image} />
        </ImageContainer>
      </ImageContainerPai>
      <InfoContainer>
        <NameContainer>{data && data[0].name}</NameContainer>
        <StatsGenderContainer>
          Gender: {data && data[0].gender}
        </StatsGenderContainer>
        <StatsStatusContainer>
          Status: {data && data[0].status}
        </StatsStatusContainer>
        <StatsSpeciesContainer>
          Species: {data && data[0].species}
        </StatsSpeciesContainer>
      </InfoContainer>
    </Container>
  );
};

export default Card;
