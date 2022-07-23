import { React, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home/UI/Home";
import Age2 from "./Pages/Boys/UI/Age2";
import Age8 from "./Pages/Boys/UI/Age8";
import Header from "./Pages/Layout/Header";
import Footer from "./Pages/Layout/Footer";
import ItemDetail from "./Pages/Boys/UI/ItemDetail";
import Wishlist from "./Pages/Wishlist/UI/Wishlist";
import Cart from "./Pages/Cart/UI/Cart";

export const App = () => {
  const [backgroundPage, setBackgroundPAge] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Header
          backgroundPage={backgroundPage}
          setBackgroundPAge={setBackgroundPAge}
        />
        <Routes>
          <Route
            excat
            path="/"
            element={
              <Home
                backgroundPage={backgroundPage}
                setBackgroundPAge={setBackgroundPAge}
              />
            }
          ></Route>
          <Route
            path="/Age2"
            element={
              <Age2
                backgroundPage={backgroundPage}
                setBackgroundPAge={setBackgroundPAge}
              />
            }
          ></Route>
          <Route
            path="/Age8"
            element={
              <Age8
                backgroundPage={backgroundPage}
                setBackgroundPAge={setBackgroundPAge}
              />
            }
          ></Route>
          <Route 
          path="/ItemDetail" 
          element={
            <ItemDetail
            backgroundPage={backgroundPage}
            setBackgroundPAge={setBackgroundPAge}/>
          }></Route>
          <Route
            path="/wishlist"
            element={
              <Wishlist
                backgroundPage={backgroundPage}
                setBackgroundPAge={setBackgroundPAge}
              />}></Route>
               <Route
            path="/cart"
            element={
              <Cart
                backgroundPage={backgroundPage}
                setBackgroundPAge={setBackgroundPAge}
              />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
