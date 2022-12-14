import { Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IReq } from "../../screens/Home";
import Card from "../card";
import LoadingComponent from "../loading";
import { Container } from "./style";

const CardList = ({ results, loading }: IReq) => {
  useEffect(() => {}, [loading, results]);

  return (
    <Container>
      <LoadingComponent loading={loading} />
      {results && !loading && (
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {results.map((l, i) => (
            <Card data={l} key={i} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default CardList;
