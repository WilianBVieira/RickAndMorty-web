import { Container, InputComponent } from "./style";
import { InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchbar = () => {
  return (
    <Container>
      <InputGroup size="sm">
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <InputComponent />
      </InputGroup>
    </Container>
  );
};

export default Searchbar;
