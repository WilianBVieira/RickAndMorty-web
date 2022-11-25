import styled from "styled-components";
import { Input } from "@chakra-ui/react";

export const Container = styled.div`
  display: flex;
  width: 95%;
  height: 5%;
`;

export const InputComponent = styled(Input).attrs(() => ({
  placeholder: "Pesqusiar",
  backgroundColor: "white",
  borderRadius: "20px",
}))``;
