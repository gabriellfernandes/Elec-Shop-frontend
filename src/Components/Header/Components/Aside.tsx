import Logo from "../../../Assets/logo.png";
import * as Style from "./style";

const Aside = ({ active }: { active: boolean }) => {
  return (
    <Style.AsideContainer theme={active ? "active" : ""}>
      <Style.NavLinks>Home</Style.NavLinks>
      <Style.NavLinks>Products</Style.NavLinks>
      <Style.NavLinks>About</Style.NavLinks>
      <Style.NavLinks>User</Style.NavLinks>
    </Style.AsideContainer>
  );
};

export default Aside;
