import { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LazyRoute from "./Lazy";

// home page
const HomePage = lazy(() => import("@/pages/Home"));
// product single
const SingleProduct = lazy(() => import("@/pages/Product"));

function RouterPages() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<LazyRoute element={<HomePage />} />} />
          <Route
            path="products/:id"
            element={<LazyRoute element={<SingleProduct />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default RouterPages;
