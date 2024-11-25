import React from "react";
import { useState } from "react";
import Card from "../card/Card";
import { productList } from "../data/Data";
// count داخل {} قرار بگیرد؟؟چرا
function AddCartBtn({ count = 0, entity }) {
  const [counter, setCounter] = useState(count);

  return (
    <>
      {count === 0 && <button className="addCart">Add To Cart </button>}
      {count !== 0 && (
        <div>
          {" "}
          <Card className="countBtn addCart">
            <div>
              <svg
                onClick={() => {
                  entity > counter && setCounter(counter + 1);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="plus">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>

            <p>{counter}</p>
            <div
              onClick={() => {
                counter > 0 && setCounter(counter - 1);
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="minus">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14"
                />
              </svg>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}

export default AddCartBtn;
