import Header from "./components/shared/Header/Header";
import GlobalStyle from "./GlobalStyles";
import { Outlet } from "react-router-dom";


const LayoutComponent = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet /> {/* This is where the route-specific components will render */}
    </>
  );
};

export default LayoutComponent;
