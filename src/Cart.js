import React from "react";
import "./Cart.css";
import { Typography } from "@mui/material";
import AddCartBtn from "./component/common/AddCartBtn";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import { Directions } from "@mui/icons-material";
function Cart(props) {
  const {
    title,
    price,
    description,
    discount,
    entity,
    count,
    deleteProduct,
    id,
    editProduct,
  } = props;
  // const displayF = {
  //   display: "flex",
  //   alignItems: "center",
  //   transform: "translateX(100px)",
  // };

  const offPrice = (Number(price) * discount) / 100;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",

        width: "100%",
        border: "1px solid black ",
        borderRadius: "4px",
        padding: "4px",
        gap: "6px",
      }}>
      <Typography
        noWrap
        defaultValue={"Title"}
        component={"h5"}
        sx={{ display: "flex", width: "100%" }}>
        {title}
      </Typography>

      <Typography>
        <Typography
          component="h4"
          sx={{ display: "block-inline", flexWrap: "nowrap" }}>
          {" "}
          Price
        </Typography>
        <Box display="block">
          <Typography
            component="h6"
            fontSize={11}
            sx={{ display: "block" }}
            className={Boolean(discount) ? "price" : ""}>
            {price}
          </Typography>

          {Boolean(discount) && (
            <Typography
              component="h6"
              fontSize={11}
              className="offBox"
              sx={{ display: "block" }}>
              {Number(price) - offPrice}
            </Typography>
          )}
        </Box>
      </Typography>

      <Typography noWrap component="h6" fontSize={12} fontStyle="bold">
        Describtion : {description}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}>
        <Box>
          <AddCartBtn count={1} entity={entity} />
        </Box>
        <Box sx={{ display: "flex", gap: "4px" }}>
          <DeleteIcon
            variant="text"
            sx={{ display: "inline" }}
            onClick={() => deleteProduct(id)}></DeleteIcon>
          <ModeEditOutlineIcon
            sx={{ display: "inline" }}
            onClick={() => editProduct(id)}>
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
          </ModeEditOutlineIcon>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
