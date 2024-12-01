import React, { useState } from "react";
import "./CartForm.css";
// import CartFormLayout from "../component/card/CartFormLayout";
import { Button, SvgIcon, TextField, Typography, Box } from "@mui/material";
import DiscountIcon from "@mui/icons-material/Discount";
const CartForm = ({ saveData, editingProduct, setAddProduct }) => {
  const [addCart, setAddCart] = useState({
    title: editingProduct ? editingProduct.title : "",
    price: editingProduct ? editingProduct.price : "",
    discount: editingProduct ? editingProduct.discount : "",
    description: editingProduct ? editingProduct.description : "",
  });

  const backToApp = () => {
    setAddProduct(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveData(addCart);
  };

  const handleChangeTitle = (e) => {
    setAddCart((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  };
  const handleChangePrice = (e) => {
    setAddCart((prev) => {
      return {
        ...prev,
        price: e.target.value,
      };
    });
  };
  const handleChangeDiscount = (e) => {
    setAddCart((prev) => {
      return {
        ...prev,
        discount: e.target.value,
      };
    });
  };
  const handleChangeDescription = (e) => {
    setAddCart((prev) => {
      return {
        ...prev,
        description: e.target.value,
      };
    });
  };

  return (
    <>
      <form className="cartForm" onSubmit={handleSubmit}>
        <Button onClick={backToApp}>Back</Button>

        <Typography>Product Name </Typography>
        <TextField
          variant="outlined"
          color="primary"
          focused
          onChange={handleChangeTitle}
          value={addCart.title}
        />

        <Typography>Price </Typography>
        <TextField
          variant="outlined"
          color="primary"
          focused
          onChange={handleChangePrice}
          value={addCart.price}
        />
        <Box component="div" display="block">
          <Typography display="block">
            {" "}
            <SvgIcon component={DiscountIcon} viewBox="5 -6 20 30" />
          </Typography>

          <TextField
            variant="outlined"
            color="primary"
            focused
            display="block"
            onChange={handleChangeDiscount}
            value={addCart.discount}
          />
        </Box>
        <Box component="div" display="block">
          <Typography display="block">Description </Typography>
          <TextField
            variant="outlined"
            color="primary"
            focused
            display="block"
            onChange={handleChangeDescription}
            value={addCart.description}
          />
          <Box component="div" display="block">
            <Button
              sx={{ transform: "translateY(20px)" }}
              display="block"
              variant="contained"
              color="primary"
              type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default CartForm;
