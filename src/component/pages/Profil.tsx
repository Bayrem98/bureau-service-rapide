import { Button } from "@mui/material";

const Profile = () => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", marginTop: 20 }}>Mon Profil</h1>
        <div
          className="d-flex justify-content-center"
          style={{ marginTop: 80 }}
        >
          <Button
            style={{
              height: 200,
              width: 300,
              backgroundColor: "#1976d2",
              marginRight: 100,
            }}
          >
            <h4 style={{ textAlign: "center", color: "white", paddingTop: 10 }}>
              Demande en attente
            </h4>
          </Button>
          <Button
            style={{ height: 200, width: 300, backgroundColor: "#1976d2" }}
          >
            <h4 style={{ textAlign: "center", color: "white", paddingTop: 10 }}>
              Demande cloturée
            </h4>
          </Button>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{ marginLeft: 30, marginRight: 30, marginTop: 80 }}
        >
          <Button
            style={{ height: 100, width: 300, backgroundColor: "#1976d2" }}
          >
            <h4 style={{ textAlign: "center", color: "white", paddingTop: 10 }}>
              Mes Reclamations
            </h4>
          </Button>
          <Button
            style={{ height: 100, width: 300, backgroundColor: "#1976d2" }}
          >
            <h4 style={{ textAlign: "center", color: "white", paddingTop: 10 }}>
              Mes Avis
            </h4>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;
