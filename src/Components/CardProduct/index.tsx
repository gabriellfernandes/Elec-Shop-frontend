import * as Style from "./style";
import ImageProduct from "../../Assets/product_image.webp";

const CardProduct = ({
  name,
  description,
  marking,
}: {
  name: string;
  description: string;
  marking: string;
}) => {
  return (
    <Style.CardContainer>
      <Style.CardImage src={ImageProduct} alt="imagem ilustrativa do produto" />
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
