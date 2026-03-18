import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import About from "./About";
import Fields from "./Fields";
import Services from "./Services";
import Status from "./Status";
import Join from "./Join";
import Community from "./Community";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "fields", Component: Fields },
      { path: "services", Component: Services },
      { path: "status", Component: Status },
      { path: "join", Component: Join },
      { path: "community", Component: Community },
      { path: "contact", Component: Join }, // Reusing Join for contact placeholder
      { path: "*", Component: Home },
    ],
  },
], { basename: '/ai-ethics/' });
