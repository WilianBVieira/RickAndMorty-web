import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IRAMProps } from "../../screens/Home";
import Card from "../card";
import { Container } from "./style";

const CardList = ({ data }: IRAMProps) => {
  useEffect(() => {}, [data]);
  return (
    <Container>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={2}
      >
        <GridItem>
          <Card data={data} />
        </GridItem>
        <GridItem>
          <Card data={data} />
        </GridItem>
        <GridItem>
          <Card data={data} />
        </GridItem>
        <GridItem>
          <Card data={data} />
        </GridItem>
        <GridItem>
          <Card data={data} />
        </GridItem>
        <GridItem>
          <Card data={data} />
        </GridItem>
      </Grid>
    </Container>
  );
};

export default CardList;
