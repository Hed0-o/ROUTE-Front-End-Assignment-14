import "./index.css";
import Blogs from "./components/Blogs";
import About from "./pages/About";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import BlogDetails from "./pages/BlogDetails";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/3dasa" replace />,
    },
    {
      path: "3dasa",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "blogs", element: <Blogs /> },
        { path: "blogs/:slug", element: <BlogDetails /> },
        { path: "about", element: <About /> },
        { path: "*", element: <NotFound /> },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  {
    basename: "/ROUTE-Front-End-Assignment-14/",
  },
);

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <main className="grow">
        <RouterProvider router={router}></RouterProvider>
      </main>
    </div>
  );
}

export default App;
