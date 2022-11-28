import styled from "styled-components";

export const Container = styled.div`
  background-color: red;
  width: 100%;
  height: 65%;
  display: grid;
  grid-template-columns: repeat(3, minmax(auto-fit, 1fr));

  grid-gap: 40px;
  margin: 0 3rem 0;
`;
