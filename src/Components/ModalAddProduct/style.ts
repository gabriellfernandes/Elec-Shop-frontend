import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.5); /* Fundo semi-transparente */
`;

export const ModalContent = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 25px;
  border-radius: 26px;
  width: 80%;
  max-width: 400px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 41;
  border-radius: 4px;
  position: relative;
  overflow-y: auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 10px;
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

export const CloseButton = styled.span`
  font-weight: 700;
  font-size: 18px;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`;

export const Title = styled.label`
  display: inline-block;
  font-size: 24px;
  color: #2d2b2b;
  font-family: Poppins;
  font-weight: 700;
  text-transform: capitalize;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 18px;
  color: #2d2b2b;
  font-family: Poppins;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid;
  height: 30px;
  border-radius: 4px;
  color: black;
  padding-left: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid;
  height: auto;
  color: black;
  padding-left: 10px;
  padding-top: 10px;
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid;
  height: 30px;
  border-radius: 4px;
  color: black;
  padding-left: 10px;
`;

export const Option = styled.option``;

export const Button = styled.button`
  background-color: #198f51;
  color: #494940;
  border-radius: 26px;
  color: white;
  width: 100%;
  max-width: 180px;
  font-weight: 700;
  height: 40px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
