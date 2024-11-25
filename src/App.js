import { useEffect, useState } from "react";
import Cart from "../src/Cart";
import "./App.css";
import Layout from "./component/common/Layout";
import { initialData } from "./component/data/Data";
import CartForm from "./form/CartForm";
import Modal from "./form/Modal";

function App() {
  const [productList, setProductList] = useState(initialData);
  const [addProduct, setAddProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState("");
  // const [openModal, setOpenModal] = useState(false);

  const saveDataHandler = (addCart) => {
    const id = Math.floor(Math.random() * 10000);
    const finalData = { ...addCart, id };
    console.log(finalData);
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
          <button
            className="cBtn"
            onClick={() => {
              setAddProduct(true);
            }}>
            <div className="div1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="2 1 46 25  "
                strokeWidth={4}
                stroke="currentColor"
                className="size-0.1">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <p className="p">Product</p>
          </button>
          <p className="p"></p>
          <div className="App">
            {productList.map((product) => (
              <Cart
                key={product.id}
                {...product}
                deleteProduct={deleteProduct}
                editProduct={editProduct}
              />
            ))}
          </div>
        </>
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
      {addProduct && (
        <Modal>
          <CartForm saveData={saveDataHandler} addProduct={setAddProduct} />
        </Modal>
      )}
    </Layout>
  );
}

export default App;

// {addProduct && (
//   <Modal>
//     <CartForm saveData={saveDataHandler} setAddProduct={setAddProduct} />
//   </Modal>
// )}
