import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from "react-router-dom";
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
import Home from "./component/pages/Home";
import Footer from "./component/parts/Footer";
import DemandeEnAttente from "./component/pages/compteUser/DemandeEnAttente";
import DemandeCloturee from "./component/pages/compteUser/DemandeCloturee";
import MesReclamations from "./component/pages/compteUser/MesReclamations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "react-international-phone/style.css";
import ProfessionelProfil from "./component/pages/listeProfession/ProfessionelProfil";
import Cookies from "js-cookie";
import ContactsTable from "./component/Administation/contactUsers/ContactTable";
import { Card, CardBody, CardFooter, CardHeader } from "reactstrap";

function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleClick = () => {
    setIsCardOpen(!isCardOpen);
  };
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
            {Cookies.get("access_token_admin") && (
              <>
                <Routes>
                  <Route path="/ouvriertable" element={<OuvriersTable />} />
                  <Route path="/clienttable" element={<ClientsTable />} />
                  <Route path="/admintable" element={<AdminsTable />} />
                  <Route path="/contactable" element={<ContactsTable />} />
                  <Route path="/list" element={<ListSecteurPage />} />
                </Routes>
              </>
            )}

            {Cookies.get("access_token_admin" && "access_token_client") && (
              <>
                <Routes>
                  <Route path="/list" element={<ListSecteurPage />} />
                  <Route
                    path="/professionel/:prof"
                    element={<ProfessionelProfil />}
                  />
                  <Route
                    path="/demandeenattente/:userId"
                    element={<DemandeEnAttente />}
                  />
                  <Route
                    path="/demandecloturee/:userId"
                    element={<DemandeCloturee />}
                  />
                  <Route
                    path="/mesreclamations"
                    element={<MesReclamations />}
                  />
                </Routes>
              </>
            )}
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/profil" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
          <div className="whatsapp-bubble" onClick={handleClick}>
            <FontAwesomeIcon
              icon={faWhatsapp}
              beat
              size="xl"
              style={{ color: "white" }}
            />
          </div>
          {isCardOpen && (
            <div className="whatsapp-card">
              <Card>
                <CardHeader
                  className="whatsapp-card-header"
                  style={{ backgroundColor: "#25d366" }}
                >
                  <span
                    className="whatsapp-card-header-close"
                    style={{
                      color: "white",
                    }}
                    onClick={handleClick}
                  >
                    X
                  </span>
                  <span
                    className="whatsapp-card-header-title"
                    style={{
                      color: "white",
                    }}
                  >
                    Bonjour !
                  </span>
                  <br />
                  <br />
                  <span
                    className="whatsapp-card-header-para"
                    style={{
                      color: "white",
                    }}
                  >
                    Cliquez sur le contact ci-dessous pour discuter sur
                    WhatsApp...
                  </span>
                </CardHeader>
                <CardBody>
                  <a
                    className="whatsapp-card-body-link1"
                    data-action="open"
                    data-phone="52368419"
                    data-message
                    href="https://wa.me/21652368419?text=Bonjour je veux un coup de aide"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "black",
                    }}
                  >
                    <img
                      className="whatsapp-card-body-image"
                      src="/image/logo/logo 2.png"
                      alt="."
                    />
                    L'équipe Service Rapide
                  </a>
                </CardBody>
                <Link to={"/contact"} style={{ textDecoration: "none" }}>
                  <CardFooter className="whatsapp-card-footer">
                    <p
                      className="whatsapp-card-body-link2"
                      style={{
                        color: "black",
                      }}
                    >
                      Nous contacter par e-mail...
                    </p>
                  </CardFooter>
                </Link>
              </Card>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default App;
