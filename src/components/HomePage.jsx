import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
//   import Checkboxes from "../common/CheckBox";
import { useNavigate } from "react-router";

import BackImage from "./assets/background.jpeg";
import RightImage from "./assets/Right.jpeg";
import Logo from "./assets/logo.jpeg";
const HomePage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        backgroundImage: `url(${BackImage})
      `,
        // backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: "100vh",
      }}
    >
      <Grid container>
        <Grid item xs={0.5} sm={0.5} md={2} lg={2}></Grid>
        <Grid item xs={11} sm={11} md={10} lg={10}>
          <Box
            sx={{
              mt: "25vh",
              // ml:{xs:"6px"}
              //   position:"absolute",
              // right:"80px",
              // top:"25vh"
            }}
          >
            <Card
              sx={{
                // display: "flex",
                maxWidth: 800,
                padding: { xs: 0, sm: 2 },
                // justifyContent: "space-around",
                // alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${Logo})
`,
                    // backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "100px",
                    width: "100px",
                    position: {
                      md: "relative",
                      left: "200px",
                    },
                  }}
                ></Box>
              </Box>

              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <CardMedia
                    component="img"
                    sx={{ width: 390,paddingLeft:{xs:0,sm:15,md:0,lg:0} }}
                    image={RightImage}
                    alt="image"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <Box
                    sx={{
                      dispaly: { sm: "block", md: "flex" },

                      flexDirection: "column",
                      lineHeight: "30px",
                    }}
                  >
                    <CardContent>
                      <label>Username</label>

                      <TextField
                        sx={
                          {
                            //   marginTop: 1,
                          }
                        }
                        fullWidth
                        id="filled-basic"
                        label=""
                        variant="filled"
                      />

                      <label>Password</label>

                      <TextField
                        sx={
                          {
                            //   marginTop: 2,
                          }
                        }
                        fullWidth
                        id="filled-basic"
                        label=""
                        variant="filled"
                      />
                      <Box
                        sx={{ display: "flex", alignItems: "center", pt: 1 }}
                      >
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{
                            textTransform: "capitalize",
                            width: "150px",
                            //   ml: "10px",
                          }}
                          onClick={handleLogin}
                        >
                          {" "}
                          login
                        </Button>
                      </Box>
                    </CardContent>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={0.5} sm={0.5} md={2} lg={2}></Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
