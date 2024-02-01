import { Card } from "@mui/material";

const Home = () => {
  return (
    <>
      <div className="">
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Acceuil</h1>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: 80 }}
        >
          <Card
            style={{
              height: 300,
              width: 300,
              backgroundColor: "#1976d2",
              marginRight: 100,
            }}
          >
            <h4
              style={{ textAlign: "center", color: "white", paddingTop: 120 }}
            >
              Demande en attente
            </h4>
          </Card>
          <Card style={{ height: 300, width: 300, backgroundColor: "#1976d2" }}>
            <h4
              style={{ textAlign: "center", color: "white", paddingTop: 120 }}
            >
              Demande cloturée
            </h4>
          </Card>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 30, marginRight: 30, marginTop: 80 }}
        >
          <Card style={{ height: 100, width: 300, backgroundColor: "#1976d2" }}>
            <h4 style={{ textAlign: "center", color: "white", paddingTop: 33 }}>
              Mes Reclamations
            </h4>
          </Card>
          <Card style={{ height: 100, width: 300, backgroundColor: "#1976d2" }}>
            <h4 style={{ textAlign: "center", color: "white", paddingTop: 33 }}>
              Mes Avis
            </h4>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
