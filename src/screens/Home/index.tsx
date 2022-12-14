import React, { useEffect, useState } from "react";
import CardList from "../../components/cardList";
import Logo from "../../components/homeLogo";
import Pagination from "../../components/pagination";
import Searchbar from "../../components/searchbar";
import { IRickAndMorty } from "../../interfaces/char";
import { Container } from "./style";

export interface IReq {
  results: [IRickAndMorty] | undefined;
  loading: boolean;
}

export interface IRAMProps {
  data: [IRickAndMorty] | undefined;
}

const Home = () => {
  const [data, setData] = useState<IReq>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function handlePage(click: number) {
    if ((click: typeof page) => 1) {
      setPage(page + click);
    }
  }

  useEffect(() => {
    console.log(`render home`);
  }, data?.results);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character?page=${page - 1}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    setLoading(false);
  }, [page]);
  return (
    <Container>
      <Logo />
      <Searchbar />
      <CardList results={data && data.results} loading={loading} />
      <Pagination
        pages={page}
        handleClick={(click: number) => handlePage(click)}
      />
    </Container>
  );
};

export default Home;
