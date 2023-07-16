import { BiSolidUserCircle, BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import * as Style from "./style";
import Logo from "../../Assets/logo.png";
import Aside from "./Components/Aside";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../Context/ProductContext";

const Header = () => {
  const { getProductByName } = useProductsContext();
  const [active, setActive] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getProductByName(search);
  };
  return (
    <>
      <Style.ContainerHeader>
        <Style.Image src={Logo} alt="Logo" />

        <Style.ContainerNav>
          <Style.ContainerSearch onSubmit={handleSubmit}>
            <BiSearchAlt size={25} />

            <Style.Input
              type="text"
              placeholder="Pesquise..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Style.ContainerSearch>

          <Style.ContainerNavLinks>
            <Style.NavLinks onClick={() => navigate("/")}>Home</Style.NavLinks>
            <Style.NavLinks onClick={() => navigate("/")}>
              Products
            </Style.NavLinks>

            <BiSolidUserCircle size={40} />
          </Style.ContainerNavLinks>
        </Style.ContainerNav>

        <Style.HamburgerButton
          onClick={() => {
            setActive(!active);
          }}
          theme={active ? "active" : ""}
        >
          <Style.Bar className="bar1"></Style.Bar>
          <Style.Bar className="bar2"></Style.Bar>
          <Style.Bar className="bar3"></Style.Bar>
        </Style.HamburgerButton>

        <Aside active={active} />
      </Style.ContainerHeader>
    </>
  );
};

export default Header;
