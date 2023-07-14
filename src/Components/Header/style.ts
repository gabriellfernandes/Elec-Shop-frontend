import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 98vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #efefef;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-bottom-right-radius: 20px;
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
