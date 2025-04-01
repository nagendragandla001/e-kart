import React, { Suspense } from "react";
import Header from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes/routeConfig";
import Layout from "./components/Layout";
import PageSkeletion from "./components/PageSkeletion";
import NotFound from "./components/NotFound";
import PageLoadSpinner from "./components/PageLoadSpinner";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {AppRoutes.map((route, index) => {
            const Component = React.lazy(route.component);
            return (
              <Route
                key={route.name}
                path={route.path}
                index={route.index || false}
                element={
                  <Suspense fallback={<PageLoadSpinner />}>
                    <Component />
                  </Suspense>
                }
              />
            );
          })}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
