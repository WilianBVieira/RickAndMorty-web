import React from "react";
import { IRAMProps } from "../../screens/Home";
import Card from "../card";
import { Container } from "./style";

const CardList = ({ data }: IRAMProps) => {
  console.log(data);
  return (
    <Container>
      <Card data={data} />
    </Container>
  );
};

export default CardList;
