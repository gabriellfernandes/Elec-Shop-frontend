import styled from "styled-components";

interface ButtonProps {
  theme: string;
}

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #efefef;
  box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
  border-bottom-right-radius: 100px;
  position: relative;
  margin-bottom: 80px;
`;

export const Image = styled.img`
  @media (max-width: 500px) {
    width: 120px;
  }
`;

export const ContainerNav = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 460px) {
    display: none;
  }
`;

export const ContainerSearch = styled.div`
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 22px;
  padding-left: 10px;
  background-color: #efefef;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  padding-left: 10px;
  width: 80%;
  border: none;
  outline: none;
`;

export const ContainerNavLinks = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 500px) {
    gap: 20px;
  }
`;

export const NavLinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  cursor: default;

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
      width: 0;
    }

    &:hover:after {
      width: 100%;
    }
  }
`;

export const HamburgerButton = styled.button<ButtonProps>`
  width: 30px;
  height: ${(props) => (props.theme == "active" ? "20px" : "24px")};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  border: none;
  align-items: ${(props) => (props.theme == "active" ? "center" : "")};
  justify-content: ${(props) => (props.theme == "active" ? "center" : "")};
  padding-top: ${(props) => (props.theme == "active" ? "10px" : "0px")};

  .bar1 {
    transform: ${(props) =>
      props.theme == "active" ? "rotate(-45deg)" : "rotate(0deg)"};
    margin-bottom: ${(props) => (props.theme == "active" ? "-7px" : "0")};
  }

  .bar2 {
    opacity: ${(props) => (props.theme == "active" ? "0" : "1")};
  }

  .bar3 {
    transform: ${(props) =>
      props.theme == "active" ? "rotate(45deg)" : "rotate(0deg)"};
    margin-bottom: ${(props) => (props.theme == "active" ? "7px" : "0")};
  }

  @media (max-width: 460px) {
    display: flex;
  }
`;

export const Bar = styled.div`
  width: 100%;
  height: 4px;
  background-color: black;
  border-radius: 10px;
  transition: all 0.3s ease;
`;
