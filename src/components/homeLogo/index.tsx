import { Container, ContainerLogo } from "./style";

const LogoIcon = require("../../assets/RickAndMortyLogo.png");

const Logo = () => {
  return (
    <Container>
      <ContainerLogo src={LogoIcon} />
    </Container>
  );
};

export default Logo;
