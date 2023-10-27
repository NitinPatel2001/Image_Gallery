import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import axios from "axios";
import "./Home.css";

var s;
var data;

export function getdata(photoID1) {
  const k = {
    photoID: photoID1,
  };

  axios
    .post("https://783vcz-4000.csb.app/search", k)
    .then((response) => {
      data = response.data;
      s = "";
      for (let index = 0; index < response.data.length; index++) {
        const element = response.data[index];
        s += `
          <Grid id="cards">
              <img
                width = "400px"
                height = "600px"
                src=${element.urls.regular}
                loading="lazy"
                alt=${element.id}
              />
              <div>${element.user.first_name}</div>
              <div>👍🏻: ${element.user.total_likes}</div>
          </Grid>
        `;
      }
      const divsec = document.getElementById("Gallery");
      divsec.innerHTML = s;
    })
    .catch((err) => {
      console.log(err);
    });
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 6,
};

export default function TitlebarBelowMasonryImageList() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [first_name, setfirst_name] = React.useState("Nitin");
  const [last_name, setlast_name] = React.useState("Patel");
  const [total_likes, setlikes] = React.useState(44);
  const [imgurl, setimgurl] = React.useState("");
  const [instagram, setinstagram] = React.useState("Nitin");
  const [Email, setEmail] = React.useState("Nitin");
  const [Portfolio, setPortfolio] = React.useState("Nitin");
  const [twitter, settwitter] = React.useState("Nitin");
  const [totalphotos, settotalphotos] = React.useState("Nitin");
  const [username, setusername] = React.useState("Nitin");

  function HandleClick(e) {
    const id = e.target.alt;
    var get_data = "";
    if (data) {
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (id === element.id) {
          get_data = element;
        }
      }
    }
    if (get_data !== "") {
      console.log(get_data);
      setfirst_name(get_data.user.first_name);
      setlast_name(get_data.user.last_name);
      setlikes(get_data.user.total_likes);
      setimgurl(get_data.urls.regular);
      setinstagram(get_data.user.instagram_username);
      setEmail(get_data.user.paypal_email);
      setPortfolio(get_data.user.portfolio_url);
      settwitter(get_data.user.twitter_username);
      settotalphotos(get_data.user.total_photos);
      setusername(get_data.user.username);
      handleOpen();
    }
  }

  return (
    <Box
      style={{
        backgroundColor: "lightgray",
        height: "auto",
        padding: "20px",
        width: "auto",
      }}
    >
      <Grid
        container
        onClick={HandleClick}
        align="center"
        className="ImageText"
        id="Gallery"
        variant="quilted"
        gap={5}
      >
        <Grid
          item
          xs={12}
          style={{ textAlign: "center", display: "block", height: "100vh" }}
        >
          <h1
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              color: "blue",
            }}
          >
            Welcome to Image Gallery
          </h1>
          <h3 style={{ textAlign: "center", fontFamily: "cursive" }}>
            By Nitin Patel
          </h3>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="modal" sx={style} overflow="scroll">
          <img width="400px" height="400px" src={imgurl} alt={imgurl}></img>
          <Grid gap={0} container width="400px">
            <Grid item xs={12} id="modal-modal-title">
              <h1
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                Name: {first_name} {last_name}
              </h1>
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                textAlign: "center",
              }}
              id="modal-modal-description"
            >
              Likes: {total_likes}
            </Grid>
            <Grid
              item
              xs={6}
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                textAlign: "center",
              }}
              id="modal-modal-description"
            >
              Total Photoes: {totalphotos}
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                textAlign: "center",
              }}
              id="modal-modal-description"
            >
              <h1
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                  textAlign: "center",
                }}
              >
                Social Links
              </h1>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                textAlign: "start",
              }}
              id="modal-modal-description"
            >
              username: {username}
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                textAlign: "start",
              }}
              id="modal-modal-description"
            >
              Instagram: {instagram}
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                textAlign: "start",
              }}
              id="modal-modal-description"
            >
              Twitter: {twitter}
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                textAlign: "start",
              }}
              id="modal-modal-description"
            >
              Portfolio: {Portfolio}
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                fontFamily: "monospace",
                fontWeight: "bolder",
                textAlign: "start",
              }}
              id="modal-modal-description"
            >
              Email: {Email}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}
