import { useState } from "react";
import CardProduct from "../../Components/CardProduct";
import Header from "../../Components/Header";
import * as Style from "./style";
import { useProductsContext } from "../../Context/ProductContext";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ImageProduct from "../../Assets/product_image.webp";
import ModalAddProduct from "../../Components/ModalAddProduct";

function ProductsPage() {
  const { products, getAllProducts, getProductByMarking } =
    useProductsContext();
  const [open, setOpen] = useState(false);
  const [navActive, setNavActive] = useState(0);

  return (
    <>
      <Header />

      <Style.ContainerPage>
        <Style.ContainerMarkings>
          <Style.Title>Marcas</Style.Title>
          <Style.ContainerNavLinks>
            <Style.NavLinks
              onClick={() => {
                setNavActive(0);
                getAllProducts();
              }}
              theme={navActive == 0 ? "active" : ""}
            >
              Todos
            </Style.NavLinks>
            <Style.NavLinks
              onClick={() => {
                setNavActive(1);
                getProductByMarking("electrolux");
              }}
              theme={navActive == 1 ? "active" : ""}
            >
              Electrolux
            </Style.NavLinks>
            <Style.NavLinks
              onClick={() => {
                setNavActive(2);
                getProductByMarking("brastemp");
              }}
              theme={navActive == 2 ? "active" : ""}
            >
              Brastemp
            </Style.NavLinks>
            <Style.NavLinks
              onClick={() => {
                setNavActive(3);
                getProductByMarking("fischer");
              }}
              theme={navActive == 3 ? "active" : ""}
            >
              Fischer
            </Style.NavLinks>
            <Style.NavLinks
              onClick={() => {
                setNavActive(4);
                getProductByMarking("lg");
              }}
              theme={navActive == 4 ? "active" : ""}
            >
              LG
            </Style.NavLinks>
            <Style.NavLinks
              onClick={() => {
                setNavActive(5);
                getProductByMarking("samsung");
              }}
              theme={navActive == 5 ? "active" : ""}
            >
              Samsung
            </Style.NavLinks>
          </Style.ContainerNavLinks>
        </Style.ContainerMarkings>

        <Style.Div>
          <Style.ContainerTitle>
            <Style.Title>Produtos</Style.Title>
            <AiOutlinePlusCircle
              size={30}
              className="pointer"
              onClick={() => setOpen(true)}
            />
          </Style.ContainerTitle>
          <Style.ContainerProducts>
            {products.map((product) => (
              <CardProduct
                key={product.id}
                id={product.id}
                image={product.image ? product.image : ImageProduct}
                name={product.name}
                marking={product.marking}
                description={product.description}
              />
            ))}
          </Style.ContainerProducts>
        </Style.Div>
      </Style.ContainerPage>

      {open && <ModalAddProduct setOpen={setOpen} />}
    </>
  );
}

export default ProductsPage;
