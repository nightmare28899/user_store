import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Navbar from "././components/shared/nav/Navbar";
import Footer from "././components/shared/footer/Footer";
import { ApiProvider } from "./context/ApiProvider";
import "flowbite";

function CreateRoutes() {

  return (
    <ApiProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApiProvider>
  );
}

export default CreateRoutes;
