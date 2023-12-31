import styled from "styled-components";

interface Props {
  theme: string;
}

export const ContainerPage = styled.div`
  display: flex;
  width: 100vw;
  gap: 90px;
  margin-bottom: 180px;
`;

export const ContainerMarkings = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  border-radius: 0px 26px 26px 0px;
  background: #f4f4f4;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  height: 360px;
  padding-top: 20px;
  min-width: 200px;

  @media (max-width: 500px) {
    display: none;
  }
`;

export const ContainerNavLinks = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 30px;

  @media (max-width: 500px) {
    gap: 20px;
  }
`;

export const NavLinks = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  cursor: pointer;

  & {
    position: relative;
    width: max-content;
    cursor: pointer;

    &:after,
    &:before {
      transition: all 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);
      content: "";
      position: absolute;
    }

    &:after {
      bottom: -2px;
      left: 50%;
      transform: translate(-50%);
      height: 2px;
      background: #333;
      width: ${(props) => (props.theme == "active" ? "100%" : "0")};
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

export const Div = styled.div`
  @media (max-width: 500px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: calc(80% - 45px);
  margin-right: 60px;
  margin-top: 40px;
  gap: 40px;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1380px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 500px) {
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 0px;
  }
`;

export const ContainerTitle = styled.div`
  width: 80%;
  display: flex;
  gap: 10px;
  align-items: center;

  .pointer {
    cursor: pointer;
  }
`;

export const Title = styled.h4`
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
