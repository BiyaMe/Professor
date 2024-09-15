import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", boxShadow: "none", paddingTop: "10px" }}
    >
      <Toolbar sx={{ justifyContent: "center", paddingX: "5px" }}>
        <Box display="flex" alignItems="center">
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#5e3557",
              fontWeight: "bold",
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            Rate your Professor AI
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
