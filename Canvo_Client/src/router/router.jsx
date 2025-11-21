import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import HomePgaeLyaout from "../layouts/HomePgaeLyaout";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePgaeLyaout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      { path: "/about", Component: AboutPage },
      { path: "/blog", Component: BlogPage },
      { path: "/contact", Component: ContactPage },
    ],
  },
]);
export default router;
