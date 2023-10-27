import React, { useReducer } from "react";
const initialStates = {
  num1: 0,
  num2: 0,
  result: "no result yet",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Num_one":
      return {
        ...state,
        num1: action.number,
      };
    case "Num_TWO":
      return {
        ...state,
        num2: action.number,
      };
    case "ADD":
      return {
        ...state,
        result: state.num1 + state.num2,
      };
    case "SUBTRACT":
      return {
        ...state,
        result: state.num2 - state.num1,
      };
    case "CLEAR":
      return {
        initialStates,
      };
    default:
      return {
        state,
      };
  }
};
const Numbers = () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatch] = useReducer(reducer, initialStates);

  return (
    <div>
      <h3>First Numbers:</h3>
      {numbers.map((number) => (
        <button
          onClick={() => dispatch({ type: "Num_TWO", number })}
          style={{ margin: "5px" }}
        >
          {number}
        </button>
      ))}
      <h3>Second Numbers:</h3>
      {numbers.map((number) => (
        <button
          onClick={() => dispatch({ type: "Num_one", number })}
          style={{ margin: "5px" }}
        >
          {number}
        </button>
      ))}
      <p style={{ display: "flex" }}></p>
      <button
        onClick={() => dispatch({ type: "ADD" })}
        style={{ margin: "5px" }}
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: "SUBTRACT" })}
        style={{ margin: "5px" }}
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: "CLEAR" })}
        style={{ margin: "5px" }}
      >
        C
      </button>
      <h3>Result: {state.result}</h3>
    </div>
  );
};

export default Numbers;
