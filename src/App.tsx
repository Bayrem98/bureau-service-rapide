import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import AdminsTable from "./component/Administation/admin/AdminTable";
import Login from "./component/pages/Login&Register/Login";
import ClientsTable from "./component/Administation/client/ClientTable";
import OuvriersTable from "./component/Administation/ouvrier/OuvrierTable";
import RolePage from "./component/pages/Login&Register/RolePage";
import RegisterClient from "./component/pages/Login&Register/RegisterClient";
import RegisterOuvrier from "./component/pages/Login&Register/RegisterOuvrier";
import Navbar from "./component/parts/Navbard";
import ListSecteurPage from "./component/pages/ListSecteurPage";
import Contact from "./component/pages/Contact";
import Profile from "./component/pages/compteUser/Profil";
import MessagePage from "./component/pages/MessagePage";
import Home from "./component/pages/Home";
import Footer from "./component/parts/Footer";
import DemandeEnAttente from "./component/pages/compteUser/DemandeEnAttente";
import DemandeCloturee from "./component/pages/compteUser/DemandeCloturee";
import MesReclamations from "./component/pages/compteUser/MesReclamations";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/role" element={<RolePage />} />
        <Route
          path="/registerclient"
          element={
            <RegisterClient
              refresh={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
        <Route
          path="/registerouvrier"
          element={
            <RegisterOuvrier
              refresh={function (): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        />
      </Routes>

      {localStorage.getItem("access_token") && (
        <>
          <Navbar />
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/admintable" element={<AdminsTable />} />
              <Route path="/clienttable" element={<ClientsTable />} />
              <Route path="/ouvriertable" element={<OuvriersTable />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/demandeenattente" element={<DemandeEnAttente />} />
              <Route path="/demandecloturee" element={<DemandeCloturee />} />
              <Route path="/mesreclamations" element={<MesReclamations />} />
              <Route path="/list" element={<ListSecteurPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/messagepage" element={<MessagePage />} />
            </Routes>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
