import React, { useEffect, useState } from "react";
import CardList from "../../components/cardList";
import Logo from "../../components/homeLogo";
import Pagination from "../../components/pagination";
import Searchbar from "../../components/searchbar";
import { Container } from "./style";

export interface IRickAndMorty {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: [string];
  url: string;
  created: string;
}

export interface IReq {
  results: [IRickAndMorty] | undefined;
}

export interface IRAMProps {
  data: [IRickAndMorty] | undefined;
}

const Home = () => {
  const [data, setData] = useState<IReq>();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=1`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Container>
      <Logo />
      <Searchbar />
      <CardList results={data?.results} />
      <Pagination />
    </Container>
  );
};

export default Home;
