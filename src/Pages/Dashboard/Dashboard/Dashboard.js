import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Nav } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Profile from "./../Profile/Profile";
import ManageDonors from "../ManageDonors/ManageDonors";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../Hooks/UseAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import AdminRoute from "./../../Login/AdminRoute/AdminRoute";
import DashboardAddDonor from "../DashboardAddDonor/DashboardAddDonor";

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logout } = useAuth();

  const icon = <FontAwesomeIcon icon={faSignOutAlt} />;

  let { path, url } = useRouteMatch();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "#1F2F50", height: "100%" }}>
      <Toolbar />
      <Divider style={{ color: "#fff" }} />
      <Nav.Link className="menu-items fs-5 text-white" as={HashLink} to="/home">
        Home
      </Nav.Link>

      <Divider style={{ color: "#fff" }} />
      <Nav.Link
        className="menu-items mt-1 fs-5 text-white"
        as={HashLink}
        to={`${url}`}
      >
        Profile
      </Nav.Link>
      <Divider style={{ color: "#fff" }} />
      {/* <Nav.Link
        className="menu-items fs-5 text-white"
        as={HashLink}
        to={`${url}/profile`}
      >
        Profile
      </Nav.Link> */}
      {admin && (
        <>
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            as={HashLink}
            to={`${url}/manageDonors`}
          >
            Manage All Donors
          </Nav.Link>
          <Divider style={{ color: "#fff" }} />
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            to={`${url}/makeAdmin`}
            as={HashLink}
          >
            Make Admin
          </Nav.Link>
          <Divider style={{ color: "#fff" }} />
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            as={HashLink}
            to={`${url}/addDonor`}
          >
            Add Donor
          </Nav.Link>
        </>
      )}

      {!admin && (
        <>
          <Divider style={{ color: "#fff" }} />
          <Nav.Link
            className="menu-items mt-1 fs-5 text-white"
            as={HashLink}
            to={`${url}/review`}
          >
            Review
          </Nav.Link>
        </>
      )}
      <Divider style={{ color: "#fff" }} />
      <Nav.Link
        className="menu-items fs-5 text-white"
        as={HashLink}
        to="/"
        onClick={logout}
      >
        Log Out {icon}
      </Nav.Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: "#1F2F50" }}
          className="app-bar"
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              className="text-white mx-auto"
              variant="h5"
              noWrap
              component="div"
            >
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          <Switch>
            <Route exact path={path}>
              <Profile></Profile>
            </Route>
            <AdminRoute path={`${path}/manageDonors`}>
              <ManageDonors></ManageDonors>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addDonor`}>
              <DashboardAddDonor></DashboardAddDonor>
            </AdminRoute>
          </Switch>

          {/* <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <AdminRoute path={`${path}/manageOrders`}>
              <ManageOrders></ManageOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/review`}>
              <ReviewBox></ReviewBox>
            </Route>
          </Switch> */}
        </Box>
      </Box>
    </>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
