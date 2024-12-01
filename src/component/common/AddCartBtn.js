import React from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";
import Card from "../card/Card";
import SvgIcon from "@mui/material/SvgIcon";
import { productList } from "../data/Data";
// count داخل {} قرار بگیرد؟؟چرا
function AddCartBtn({ count = 1, entity }) {
  const [counter, setCounter] = useState(count);

  return (
    <>
      {count === 0 && <button className="addCart">Add To Cart </button>}
      {count !== 0 && (
        <div>
          {" "}
          <Card /*className="countBtn addCart"*/>
            <ButtonGroup
              size="small"
              color="black"
              sx={{ padding: "0", marginRight: "0" }}>
              <Button
                size="small"
                aria-label="reduce"
                onClick={() => {
                  // setCount(Math.max(count - 1, 0));
                  counter > 0 && setCounter(counter - 1);
                }}>
                <RemoveIcon fontSize="small" />
              </Button>
              <Button size="small" disabled>
                {counter}
              </Button>
              <Button
                size="small"
                aria-label="increase"
                onClick={() => {
                  // setCount(count + 1);

                  entity > counter && setCounter(counter + 1);
                }}>
                <AddIcon fontSize="small" />
              </Button>
            </ButtonGroup>
          </Card>
        </div>
      )}
    </>
  );
}

export default AddCartBtn;
