import { ToastContainer } from "react-toastify";
import { ProductsContextProvider } from "./Context/ProductContext";
import { RoutesMap } from "./Routes/router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer autoClose={2500} />
      <RoutesMap />
    </>
  );
}

export default App;
