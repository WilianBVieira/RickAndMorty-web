import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IRAMProps, IReq } from "../../screens/Home";
import Card from "../card";
import { Container } from "./style";

const CardList = ({ results }: IReq) => {
  useEffect(() => {}, [results]);

  return (
    <Container>
      <Grid templateColumns="repeat(4, 1fr)" gap={5}>
        {results && results.map((l, i) => <Card data={l} key={i} />)}
      </Grid>
    </Container>
  );
};

export default CardList;
