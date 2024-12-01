import { useState } from "react";
import Cart from "../src/Cart";
import "./App.css";
import Layout from "./component/common/Layout";
import { initialData } from "./component/data/Data";
import CartForm from "./form/CartForm";
import { Modal } from "@mui/material";

import { Button, Typography, Grid, Box } from "@mui/material";
import BasicModal from "./form/BasicModal";

function App() {
  const [productList, setProductList] = useState(initialData);
  const [addProduct, setAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState("");
  const modalOpen = false;
  const modalClose = false;

  const saveDataHandler = (addCart) => {
    const id = Math.floor(Math.random() * 10000);
    const finalData = { ...addCart, id };
    console.log(addCart);
    setProductList((prev) => {
      return [...prev, finalData];
    });

    setAddProduct(false);
  };
  // const backToApp = () => {};

  const deleteProduct = (id) => {
    const newList = productList.filter((product) => product.id !== id);
    setProductList(newList);
  };

  const editProduct = (id) => {
    const editList = productList.find((product) => product.id === id);
    setEditingProduct(editList);
  };

  return (
    <Layout>
      {!addProduct && !editingProduct && (
        <>
          <Grid container rowGap="27px">
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              {" "}
              <Button
                variant="contained"
                onClick={() => {
                  setAddProduct(true);
                }}>
                <Typography component="h3">+ Product</Typography>
              </Button>
            </Grid>
            {productList.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                <Box>
                  {" "}
                  <Cart
                    {...product}
                    deleteProduct={deleteProduct}
                    editProduct={editProduct}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </>
      )}

      {addProduct && (
        <Modal open={modalOpen} onClose={modalClose}>
          <CartForm saveData={saveDataHandler} addProduct={setAddProduct} />
        </Modal>
      )}
      {editingProduct && (
        <Modal>
          <CartForm
            addProduct={setAddProduct}
            saveData={saveDataHandler}
            editingProduct={editingProduct}
          />
        </Modal>
      )}
    </Layout>
  );
}

export default App;
