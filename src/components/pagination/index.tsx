import React from "react";
import { Container, ContainerIcon, PageNumber } from "./style";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

interface PaginationProps {
  pages: number;
  handleClick: (click: number) => void;
}

const Pagination = ({ pages, handleClick }: PaginationProps) => {
  return (
    <Container>
      <ContainerIcon>
        <ChevronLeftIcon
          w="100%"
          h="100%"
          onClick={(e: any) => {
            if (pages > 1) handleClick(-1);
          }}
        />
      </ContainerIcon>
      <PageNumber>{pages}</PageNumber>
      <ContainerIcon>
        <ChevronRightIcon
          w="100%"
          h="100%"
          onClick={(e: any) => handleClick(1)}
        />
      </ContainerIcon>
    </Container>
  );
};

export default Pagination;
