import { Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { IRAMProps } from "../../screens/Home";
import Card from "../card";
import { Container } from "./style";

const CardList = ({ data }: IRAMProps) => {
  useEffect(() => {}, [data]);
  return (
    <Grid>
      <Card data={data} />
    </Grid>
  );
};

export default CardList;
