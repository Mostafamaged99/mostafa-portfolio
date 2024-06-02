import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Children } from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import MainLayout from "./Layouts/MainLayout/MainLayout";
function App() {
  const routes = createBrowserRouter([
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
