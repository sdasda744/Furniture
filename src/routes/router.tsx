import RootLayout from "@/components/layouts/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import AboutPage from "@/pages/About";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/HomePage";
import BlogRootLayout from "@/pages/blogs/BlogRootLayout";
import BlogDetail from "@/pages/blogs/BlogDetail";
import Blog from "@/pages/blogs/Blog";
import ProductsPage from "@/pages/products/Products";
import ProductRootLayout from "@/pages/products/ProductRootLayout";
import ProductDetails from "@/pages/products/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "products",
        element: <ProductRootLayout />,
        children: [
          {
            index: true,
            element: <ProductsPage />,
          },
          {
            path: ":productId",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "blogs",
        element: <BlogRootLayout />,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: ":postId",
            element: <BlogDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
