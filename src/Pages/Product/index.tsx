import { useState } from "react";
import CardProduct from "../../Components/CardProduct";
import Header from "../../Components/Header";
import * as Style from "./style";

function ProductPage() {
  const [navActive, setNavActive] = useState(0);
  return (
    <>
      <Header />

      <Style.ContainerPage>
        <Style.ContainerMarkings>
          <Style.Title>Marcas</Style.Title>
          <Style.ContainerNavLinks>
            <Style.NavLinks
              onClick={() => setNavActive(1)}
              theme={navActive == 1 ? "active" : ""}
            >
              Electrolux
            </Style.NavLinks>
            <Style.NavLinks
              onClick={() => setNavActive(2)}
              theme={navActive == 2 ? "active" : ""}
            >
              Brastemp
            </Style.NavLinks>
            <Style.NavLinks
              onClick={() => setNavActive(3)}
              theme={navActive == 3 ? "active" : ""}
            >
              Fischer
            </Style.NavLinks>
            <Style.NavLinks
              onClick={() => setNavActive(4)}
              theme={navActive == 4 ? "active" : ""}
            >
              LG
            </Style.NavLinks>
          </Style.ContainerNavLinks>
        </Style.ContainerMarkings>

        <div>
          <Style.Title>Produtos</Style.Title>
          <Style.ContainerProducts>
            {Array.from({ length: 20 }, (_, index) => index + 1).map(
              (elem: number) => (
                <CardProduct
                  key={elem}
                  name="Geladeira dualFrese congelador embutido"
                  description="lorem loremloremloremloremloremloremloremlorem"
                  marking="Eletrolux"
                />
              )
            )}
          </Style.ContainerProducts>
        </div>
      </Style.ContainerPage>
    </>
  );
}

export default ProductPage;
