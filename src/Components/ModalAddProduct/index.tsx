import { useProductsContext } from "../../Context/ProductContext";
import * as Style from "./style";
import { useState } from "react";
const ModalAddProduct = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { createProduct } = useProductsContext();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [marking, setMarking] = useState("");
  const [voltage, setVoltage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createProduct(name, description, marking, voltage, quantity, image);
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

          <Style.Button type="submit">Cadastrar</Style.Button>
        </Style.Form>
      </Style.ModalContent>
    </Style.ModalWrapper>
  );
};

export default ModalAddProduct;
