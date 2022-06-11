import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { Oval } from "react-loader-spinner";

const Cardx = ({ data }) => {
  if (!data) {
    return (
      <div className="container-max">
        <div className="spinerContainer">
          <p>Loading ...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      {data.records &&
        data.records.map((e) => (
          <Card
            sx={{
              minWidth: 275,
              marginTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Id: {e.id}
              </Typography>
              <Typography variant="h5" component="div">
                Name: {e.firstName}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Surname: {e.lastName}
              </Typography>
              <Typography variant="body2">
                Status: {e.session_status}
              </Typography>
              <Typography variant="body2">Country: {e.country}</Typography>
              <Typography variant="body2">
                Position: {e.title ? e.title : "empty"}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              style={{ marginRight: "20px", opacity: "50%" }}
            >
              Put
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "tomato", opacity: "50%" }}
            >
              Delete
            </Button>
          </Card>
        ))}
    </div>
  );
};

export default Cardx;
