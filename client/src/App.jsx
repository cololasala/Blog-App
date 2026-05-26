import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Single from "./pages/Single";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./style.scss";

const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/:category?",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
