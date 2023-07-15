import { BiSolidUserCircle, BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import * as Style from "./style";
import Logo from "../../Assets/logo.png";
import Aside from "./Components/Aside";

const Header = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Style.ContainerHeader>
        <Style.Image src={Logo} alt="Logo" />

        <Style.ContainerNav>
          <Style.ContainerSearch>
            <BiSearchAlt size={25} />

            <Style.Input type="text" placeholder="Pesquise..." />
          </Style.ContainerSearch>

          <Style.ContainerNavLinks>
            <Style.NavLinks>Home</Style.NavLinks>
            <Style.NavLinks>Products</Style.NavLinks>
            <Style.NavLinks>About</Style.NavLinks>

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
