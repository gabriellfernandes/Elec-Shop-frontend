import { BiSolidUserCircle, BiSearchAlt } from "react-icons/bi";
import * as Style from "./style";
import Logo from "../../Assets/logo.png";

function Header() {
  return (
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
    </Style.ContainerHeader>
  );
}

export default Header;
