import styled from "styled-components";

interface Props {
  theme: string;
}

export const ContainerPage = styled.div`
  width: 100vw;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ContainerProduct = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  min-width: 180px;
  max-width: 400px;
  width: calc(50% - 20px);
`;

export const ProductImage = styled.img`
  width: 50%;
  min-width: 180px;
  max-width: 400px;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoTitle = styled.h4`
  display: inline-block;
  font-size: 24px;
  color: #2d2b2b;
  font-family: Poppins;
  font-weight: 700;
  margin-bottom: 10px;
  text-transform: capitalize;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const InfoMarking = styled.span`
  color: #6d6d6d;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const ContainerDescription = styled.div`
  width: 100%;
`;

export const InfoDescription = styled.p`
  width: 100%;
  color: #6d6d6d;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: justify;

  @media (max-width: 500px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const InfoButton = styled.button<Props>`
  background-color: ${(props) =>
    props.theme == "delete"
      ? "#A51910"
      : props.theme == "edit"
      ? "#198f51"
      : "#6d6d6d"};
  color: #494940;
  border-radius: 26px;
  color: white;
  width: 100%;
  max-width: 180px;
  font-weight: 700;
  height: 40px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: ${(props) =>
    props.theme == "delete"
      ? "pointer"
      : props.theme == "edit"
      ? "pointer"
      : "default"};

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ContainerRelatedProduct = styled.div`
  display: flex;
  width: 100%;
  overflow-x: scroll;
  padding-bottom: 20px;
  padding-top: 20px;
  gap: 40px;

  &::-webkit-scrollbar {
    width: 0.5em; 
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent; 
  }
`;

export const Div = styled.div`
  width: 80%;
  padding: 10px;
  margin-bottom: 80px;
`;

export const RelatedProductTitle = styled.h4`
  display: inline-block;
  margin-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-bottom: 2px solid black;
  border-radius: 4px;
  font-size: 24px;
  color: #2d2b2b;
  font-family: Poppins;
  font-weight: 700;
  text-align: center;
`;
