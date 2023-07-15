import styled from "styled-components";

interface Props {
  theme: string;
}

export const AsideContainer = styled.div<Props>`
  width: ${(props) => (props.theme === "active" ? "70vw" : "0px")};
  position: absolute;
  left: 0px;
  top: 80px;
  background-color: #efefef;
  display: none;
  align-items: start;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-bottom-right-radius: 20px;
  transition: width ease-in 0.3s;
  overflow: hidden;

  @media (max-width: 460px) {
    display: flex;
  }
`;

export const Image = styled.img`
  @media (max-width: 500px) {
    width: 120px;
  }
`;

export const NavLinks = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin-left: 40px;
  margin-bottom: 20px;
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
