import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  object-fit: contain;
`;

export const CardContainerText = styled.div`
  max-width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`;

export const InfoName = styled.h4`
  color: #2d2b2b;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const InfoMarking = styled.span`
  color: #6d6d6d;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  text-align: end;
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  line-height: normal;
`;

export const Description = styled.p`
  width: 100%;
  color: #6d6d6d;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
