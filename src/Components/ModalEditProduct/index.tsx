import { useProductsContext } from "../../Context/ProductContext";
import * as Style from "./style";
import { useState } from "react";
const ModalEditProduct = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { editProduct, deleteProductById, product } = useProductsContext();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [marking, setMarking] = useState(product.marking);
  const [voltage, setVoltage] = useState(product.voltage);
  const [quantity, setQuantity] = useState(`${product.quantity}`);
  const [image, setImage] = useState(product.image ? product.image : "");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProduct(
      product.id,
      name,
      description,
      marking,
      voltage,
      quantity,
      image
    );
    setOpen(false);
  };

  return (
    <Style.ModalWrapper>
      <Style.ModalContent>
        <Style.CloseButton onClick={() => setOpen(false)}>X</Style.CloseButton>
        <Style.Title>Formulário</Style.Title>
        <Style.Form onSubmit={handleSubmit}>
          <Style.ContainerInput>
            <Style.Label>Nome</Style.Label>
            <Style.Input
              type="text"
              placeholder="ex: Geladeira"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Style.ContainerInput>
          <Style.ContainerInput>
            <Style.Label>Descrição</Style.Label>
            <Style.TextArea
              placeholder="ex: Electrolux Duplex DFN41 Frost Free 371L Branca - 110v"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Style.ContainerInput>
          <Style.ContainerInput>
            <Style.Label>Marca</Style.Label>
            <Style.Select
              required
              value={marking}
              onChange={(e) => setMarking(e.target.value)}
            >
              <Style.Option value="">Selecione um opção</Style.Option>
              <Style.Option value="electrolux">Electrolux</Style.Option>
              <Style.Option value="brastemp">Brastemp</Style.Option>
              <Style.Option value="fischer">Fischer</Style.Option>
              <Style.Option value="samsung">Samsung</Style.Option>
              <Style.Option value="lg">LG</Style.Option>
            </Style.Select>
          </Style.ContainerInput>
          <Style.ContainerInput>
            <Style.Label>Voltagem</Style.Label>
            <Style.Select
              required
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
            >
              <Style.Option value="">Selecione um opção</Style.Option>
              <Style.Option value="110">110</Style.Option>
              <Style.Option value="220">220</Style.Option>
            </Style.Select>
          </Style.ContainerInput>
          <Style.ContainerInput>
            <Style.Label>Quantidade</Style.Label>
            <Style.Input
              type="number"
              placeholder="ex: 10"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Style.ContainerInput>
          <Style.ContainerInput>
            <Style.Label>Image</Style.Label>
            <Style.Input
              type="text"
              placeholder="ex: http://image1.webp"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Style.ContainerInput>

          <Style.Button type="submit" theme={"edit"}>
            Editar
          </Style.Button>
          <Style.Button
            type="button"
            onClick={() => deleteProductById(product.id)}
          >
            Delete
          </Style.Button>
        </Style.Form>
      </Style.ModalContent>
    </Style.ModalWrapper>
  );
};

export default ModalEditProduct;
