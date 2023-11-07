import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About.jsx";
import Product from "./components/Product/Product";
import FeaturedProducts from "./pages/FeaturedProducts/FeaturedProducts";
import LoginPage from "./pages/loginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import NotFound from "./NotFound";
import { AuthProvider } from "./components/auth";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  return (
    <AuthProvider className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<FeaturedProducts />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
