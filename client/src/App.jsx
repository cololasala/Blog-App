import "./App.css";
import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Write from "./pages/Write";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Single from "./pages/Single";
import Register from "./pages/Register";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/single",
        element: <Single />,
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
  {
    path: "/write",
    element: <Write />,
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
