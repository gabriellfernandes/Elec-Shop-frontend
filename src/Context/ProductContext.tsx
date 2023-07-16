/* eslint-disable react-refresh/only-export-components */
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Interfaces from "../Interfaces/ProductsInterface";
import { api } from "../Services/Api";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../Components/Loading";

const ProductsContext = createContext<Interfaces.ContextValues>(
  {} as Interfaces.ContextValues
);

const ProductsContextProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Interfaces.Appliance[]>(
    [] as Interfaces.Appliance[]
  );
  const [product, setProduct] = useState<Interfaces.Appliance>(
    {} as Interfaces.Appliance
  );

  const createProduct = (
    name: string,
    description: string,
    marking: string,
    voltage: string,
    quantity: string,
    image: string
  ) => {
    setLoading(true);
    api
      .post(`/appliances/`, {
        name,
        description,
        marking,
        voltage,
        quantity,
        image,
      })
      .then(() => {
        toast.success("Eletrodoméstico cadastrado com sucesso!");
      })
      .catch((err: Interfaces.ErrorResponse) => {
        switch (err.response.data.message) {
          case "name already in use":
            toast.warning("Nome já esta sendo utilizado!");
            break;
          default:
            toast.error("Ops ocorreu um erro (Tente novamente)");
            break;
        }
      })
      .finally(() => setLoading(false));
  };

  const editProduct = (
    id: number,
    name: string,
    description: string,
    marking: string,
    voltage: string,
    quantity: string,
    image: string
  ) => {
    setLoading(true);
    api
      .patch(`/appliances/${id}`, {
        name,
        description,
        marking,
        voltage,
        quantity,
        image,
      })
      .then(() => {
        getProductById(`${id}`);
        toast.success("Eletrodoméstico editado com sucesso!");
      })
      .catch((err: Interfaces.ErrorResponse) => {
        switch (err.response.data.message) {
          case "name already in use":
            toast.warning("Nome já esta sendo utilizado!");
            break;
          default:
            toast.error("Ops ocorreu um erro (Tente novamente)");
            break;
        }
      })
      .finally(() => setLoading(false));
  };

  const getProductById = (id: string) => {
    setLoading(true);
    api
      .get(`/appliances/${id}`)
      .then((res: Interfaces.ApplianceResponseGetSingle) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const deleteProductById = (id: number) => {
    setLoading(true);
    api
      .delete(`/appliances/${id}`)
      .then(() => {
        navigate("/");

        toast.success("Deletado com sucesso!");
      })
      .catch((err) => {
        console.log(err);

        toast.error("Ops ocorreu um erro (Tente novamente)");
      })
      .finally(() => setLoading(false));
  };

  const getProductByMarking = (marking: string) => {
    setLoading(true);
    api
      .get(`/appliances/marking/${marking}`)
      .then((res: Interfaces.ApplianceResponseGetAll) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const getProductByName = (Name: string) => {
    setLoading(true);
    api
      .get(`/appliances/search/${Name}`)
      .then((res: Interfaces.ApplianceResponseGetAll) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const getAllProducts = () => {
    setLoading(true);
    api
      .get("/appliances")
      .then((res: Interfaces.ApplianceResponseGetAll) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (products.length < 1) {
      getAllProducts();
    }
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        createProduct,
        editProduct,
        deleteProductById,
        getAllProducts,
        getProductById,
        getProductByMarking,
        getProductByName
      }}
    >
      {loading && <LoadingComponent />}
      {children}
    </ProductsContext.Provider>
  );
};

function useProductsContext() {
  const context = React.useContext(ProductsContext);
  if (context === undefined) {
    throw new Error(
      "useProductsContext must be used within a ProductsContextProvider"
    );
  }
  return context;
}

export { ProductsContextProvider, useProductsContext };
