import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Counter.css";
import { increment, decrement } from "./couterSlice";

export const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Counter</h1>
      <div className="counter__title">
        current number:
        <div  className="counter__result">{value}</div>
      </div>
      <div className="counter__btn-wrapper">
        <button
          onClick={() => {
            dispatch(increment());
          }}
          className="counter__plus"
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
          className="counter__minus"
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
