import React from "react";
import "./Cart.css";
import AddCartBtn from "./component/common/AddCartBtn";

function Cart(props) {
  const {
    title,
    price,
    description,
    discount,
    entity,
    deleteProduct,
    id,
    editProduct,
  } = props;
  /* dar sorat hazf in object etefaghi nemioftad*/
  //   const Pcart = {
  //     titel: "",
  //     price: "",
  //     describtion: "",
  //   };
  const offPrice = (Number(price) * discount) / 100;
  // const deleteProduct = (id) => {
  //   const newList = productList.filter((product) => product.id !== id);
  //   setProductList(newList);
  // };
  return (
    <div>
      <div className="cartBoxDisplay">
        <div className="cartDisplay">
          <h5 className="h5">Product Name : {title}</h5>

          <div className="box">
            price:{""}
            <div>
              <p className={Boolean(discount) ? "price" : ""}> {price}</p>
              {Boolean(discount) && (
                <p className="offBox"> {Number(price) - offPrice}</p>
              )}
            </div>
          </div>

          <p className="p2">Description : {description}</p>
          <div className="alignTrashCardCount">
            <AddCartBtn count={1} entity={entity} />

            <button className="trash" onClick={() => deleteProduct(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-13 1 50 30"
                strokeWidth={3}
                stroke="currentColor"
                className="size-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
            <button className="edit" onClick={() => editProduct(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="-13 1 50 30"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
