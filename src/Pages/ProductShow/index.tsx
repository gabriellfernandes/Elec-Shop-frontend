import CardProduct from "../../Components/CardProduct";
import Header from "../../Components/Header";
import ImageProduct from "../../Assets/product_image.webp";
import * as Style from "./style";
import { useProductsContext } from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalEditProduct from "../../Components/ModalEditProduct";

function ProductShowPage() {
  const { product, products, getProductById, deleteProductById } =
    useProductsContext();
  const { id } = useParams();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (id !== undefined) {
      getProductById(id);
    }
  }, [id]);

  return (
    <>
      <Header />

      <Style.ContainerPage>
        <Style.ContainerProduct>
          <Style.ProductImage
            src={product.image ? product.image : ImageProduct}
            alt="Imagem Produto"
          />

          <Style.ContainerInfo>
            <Style.ContainerTitle>
              <Style.InfoMarking>{product.marking}</Style.InfoMarking>

              <Style.InfoTitle>{product.name}</Style.InfoTitle>
            </Style.ContainerTitle>
            <Style.ContainerDescription>
              <Style.InfoTitle>Detalhe do produto</Style.InfoTitle>
              <Style.InfoDescription>
                {product.description}
              </Style.InfoDescription>
            </Style.ContainerDescription>

            <Style.InfoButton
              theme={"delete"}
              onClick={() => {
                deleteProductById(product.id);
              }}
            >
              Deletar
            </Style.InfoButton>

            <Style.InfoButton
              theme={"edit"}
              onClick={() => {
                setOpen(true);
              }}
            >
              Editar
            </Style.InfoButton>
          </Style.ContainerInfo>
        </Style.ContainerProduct>

        <Style.Div>
          <Style.RelatedProductTitle>
            Produtos Relacionado
          </Style.RelatedProductTitle>
          <Style.ContainerRelatedProduct>
            {products.map(
              (relatedProduct, index) =>
                index < 5 && (
                  <CardProduct
                    key={relatedProduct.id}
                    id={relatedProduct.id}
                    image={
                      relatedProduct.image ? relatedProduct.image : ImageProduct
                    }
                    name={relatedProduct.name}
                    marking={relatedProduct.marking}
                    description={relatedProduct.description}
                  />
                )
            )}
          </Style.ContainerRelatedProduct>
        </Style.Div>
      </Style.ContainerPage>

      {open && <ModalEditProduct setOpen={setOpen} />}
    </>
  );
}

export default ProductShowPage;
