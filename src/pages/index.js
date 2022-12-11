// This file is a configuration file for all the routes and their corresponding page componenets in the app.
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";

const pageRoutes = [
  { path: "/", element: <Home/> },

  { path: "*", element: <NotFound/> },
];


export default pageRoutes;