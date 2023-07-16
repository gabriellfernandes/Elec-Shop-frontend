import { useNavigate } from "react-router-dom";
import * as Style from "./style";

const Aside = ({ active }: { active: boolean }) => {
  const navigate = useNavigate();
  return (
    <Style.AsideContainer theme={active ? "active" : ""}>
      <Style.NavLinks onClick={() => navigate("/")}>Home</Style.NavLinks>
      <Style.NavLinks onClick={() => navigate("/")}>Products</Style.NavLinks>
      <Style.NavLinks onClick={() => navigate("/")}>User</Style.NavLinks>
    </Style.AsideContainer>
  );
};

export default Aside;
