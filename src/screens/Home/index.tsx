import React from "react";
import CardList from "../../components/cardList";
import Logo from "../../components/homeLogo";
import Pagination from "../../components/pagination";
import Searchbar from "../../components/searchbar";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Logo />
      <Searchbar />
      <CardList />
      <Pagination />
    </Container>
  );
};

export default Home;
