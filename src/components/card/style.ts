import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 200px;
  width: 300px;
  :hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: scale(1.1);
  }
  border-radius: 16px;
  background-color: #c2c3c3;
  margin-top: 26px;
`;

export const ImageContainerPai = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-radius: inherit;
  :hover {
    transform: scale(1.1);
  }
`;

export const ImageContainer = styled.image`
  width: 85%;
  height: 50%;
  display: flex;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: inherit;
`;

export const NameContainer = styled.text`
  width: 90%;
  padding-top: 10px;
  border-radius: inherit;
  font-weight: 800;
  font-size: 18px;
  :hover {
    transform: scale(1.1);
  }
`;

export const ContainerStats = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  :hover {
    transform: scale(1.1);
  }
`;

export const StatsGenderContainer = styled.text``;

export const StatsStatusContainer = styled.text``;

export const StatsSpeciesContainer = styled.text``;
