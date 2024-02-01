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
import Home from "./component/pages/Home";
import Navbar from "./component/parts/Navbard";
import ListSecteurPage from "./component/pages/ListSecteurPage";
import Contact from "./component/pages/Contact";

function App() {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" element={<Login />} />
      </Routes>
      <div>
        <Navbar />
        <Routes>
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
          <Route path="/admintable" element={<AdminsTable />} />
          <Route path="/clienttable" element={<ClientsTable />} />
          <Route path="/ouvriertable" element={<OuvriersTable />} />
          <Route path="/role" element={<RolePage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<ListSecteurPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
