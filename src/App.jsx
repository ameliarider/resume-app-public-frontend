import axios from "axios";
import { Header } from "./Header";
import { ResumesPage } from "./ResumesPage";
import { Footer } from "./Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ResumesShow } from "./ResumesShow";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ResumesPage />,
      },
      {
        path: "/students/:id",
        element: <ResumesShow />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
