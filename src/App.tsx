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
import Developeur from "./component/pages/listeProfession/Developeur";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "react-international-phone/style.css";

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
              <Route path="/developeur" element={<Developeur />} />
              <Route path="/ouvriertable" element={<OuvriersTable />} />
            </Routes>
          </div>
          <Footer />
          <div className="whatsapp-bubble">
            <a
              href="https://web.whatsapp.com/send?phone=+21652368419"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                beat
                size="xl"
                style={{ color: "white" }}
              />
            </a>
          </div>
        </>
      )}
    </>
  );
}

export default App;
