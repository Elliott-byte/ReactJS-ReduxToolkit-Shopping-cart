import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import { useLazyGetProductsQuery } from "./redux/services/api";
import { setProducts } from "./redux/Slices/productsSlice";

const App = () => {
  const [trigger, result] = useLazyGetProductsQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (result?.data) {
      dispatch(setProducts(result.data.products));
    }
  }, [result?.data, dispatch]);

  if (result.status === 'uninitialized') {
    return <button onClick={() => trigger(1)}>Fetch Product</button>;
  }

  return (
    <>
      <Router>
        <SnackbarProvider
          TransitionComponent={Slide}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </SnackbarProvider>
      </Router>
    </>
  );
};

export default App;
