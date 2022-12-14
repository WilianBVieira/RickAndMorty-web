import React, { useEffect, useState } from "react";
import { IRickAndMorty } from "../../interfaces/char";
import { IRAMProps } from "../../screens/Home";
import {
  Container,
  ContainerStats,
  ImageContainer,
  ImageContainerPai,
  Img,
  InfoContainer,
  NameContainer,
  StatsGenderContainer,
  StatsSpeciesContainer,
  StatsStatusContainer,
} from "./style";

interface ICard {
  id: number;
  name: string;
}

interface ICardProps {
  data: ICard;
}

const Card = ({ data }: ICardProps) => {
  const [cardInfo, setCardInfo] = useState<IRickAndMorty>();
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${data.id}`)
      .then((res) => res.json())
      .then((data) => setCardInfo(data));
  }, [data]);
  return (
    <Container>
      <ImageContainerPai>
        <ImageContainer>
          <Img src={cardInfo && cardInfo.image} />
        </ImageContainer>
      </ImageContainerPai>
      <InfoContainer>
        <NameContainer>{cardInfo && cardInfo.name}</NameContainer>
        <ContainerStats>
          <StatsGenderContainer>
            Gender: {cardInfo && cardInfo.gender}
          </StatsGenderContainer>
          <StatsStatusContainer>
            Status: {cardInfo && cardInfo.status}
          </StatsStatusContainer>
          <StatsSpeciesContainer>
            Species: {cardInfo && cardInfo.species}
          </StatsSpeciesContainer>
        </ContainerStats>
      </InfoContainer>
    </Container>
  );
};

export default Card;
