import styled from "styled-components";

export const Container = styled.div`
  background-color: inherit;
  width: 100%;
  height: 28%;
  display: flex;
  color: white;
  justify-content: space-around;
  align-items: center;
`;

export const ContainerIcon = styled.div`
  display: flex;
  height: 40%;
  width: 3%;
  margin-top: 2%;
  margin-bottom: 2%;
  :hover {
    transform: scale(1.15);
  }
`;

export const PageNumber = styled.text`
  font-size: 22px;
  text-align: center;
  color: white;
`;
