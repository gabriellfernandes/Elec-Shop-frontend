import * as Style from "./style";
import { useNavigate } from "react-router-dom";

const CardProduct = ({
  image,
  name,
  description,
  marking,
  id,
}: {
  id: number | string;
  image: string;
  name: string;
  description: string;
  marking: string;
}) => {
  const navigate = useNavigate();
  return (
    <Style.CardContainer
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <Style.CardImage src={image} alt="imagem ilustrativa do produto" />
      <Style.CardContainerText>
        <Style.Infos>
          <Style.InfoName>{name}</Style.InfoName>
          <Style.InfoMarking>{marking}</Style.InfoMarking>
        </Style.Infos>
        <Style.Description>{description}</Style.Description>
      </Style.CardContainerText>
    </Style.CardContainer>
  );
};

export default CardProduct;
