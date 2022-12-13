import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IRAMProps, IReq, IRickAndMorty } from "../../screens/Home";
import Card from "../card";
import LoadingComponent from "../loading";
import { Container } from "./style";

const CardList = ({ results }: IReq) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IReq | null>();

  useEffect(() => {}, [results]);

  return (
    <Container>
      <LoadingComponent loading={loading} />
      {data && !loading && (
        <Grid templateColumns="repeat(4, 1fr)" gap={5}>
          {results && results.map((l, i) => <Card data={l} key={i} />)}
        </Grid>
      )}
    </Container>
  );
};

export default CardList;
