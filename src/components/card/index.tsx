import React, { useEffect, useState } from "react";
import { IRAMProps, IRickAndMorty } from "../../screens/Home";
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
        <StatsGenderContainer>
          Gender: {cardInfo && cardInfo.gender}
        </StatsGenderContainer>
        <StatsStatusContainer>
          Status: {cardInfo && cardInfo.status}
        </StatsStatusContainer>
        <StatsSpeciesContainer>
          Species: {cardInfo && cardInfo.species}
        </StatsSpeciesContainer>
      </InfoContainer>
    </Container>
  );
};

export default Card;
