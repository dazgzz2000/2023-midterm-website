import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createHashRouter, RouterProvider , createBrowserRouter} from "react-router-dom";
import RootLayout, { RootIndex } from "./pages";
import About from "./pages/about";
import Users from "./pages/users";
import CreateUsers from "./pages/createusers";
import Post from "./pages/personal";
import Posts from "./pages/posts";
import DeletePost from "./pages/deletepost";
import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/createusers",
        element: <CreateUsers />,
      },
      {
        path: "/post",
        element: <Post />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/deletepost",
        element: <DeletePost />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render
  (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
