import { useState } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { DetailsHeader } from "../../components/detailsHeader";
import { DetailsImage } from "../../components/detailsImage";
import { IRickAndMorty } from "../../interfaces/char";
import { IReq } from "../../interfaces/req";
import { DetailsParam } from "../../routes/@types/navigation";
import { IRAMProps } from "../Home";
import { Container } from "./style";

const Details = () => {
  const location = useLocation();
  const { char } = location.state;
  console.log(char);
  return (
    <Container>
      <DetailsImage />
      <DetailsHeader />
    </Container>
  );
};

export default Details;
