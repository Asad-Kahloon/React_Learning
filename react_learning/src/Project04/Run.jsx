import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Layout from "./Layout";

function Run() {
  return (
    <BrowserRouter>
      <Header />
      <Layout />
      <Footer />
    </BrowserRouter>
  );
}

export default Run;
