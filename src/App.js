import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="container">
        <h1>Increment/decrement counter</h1>
        <h3>Using react reducx</h3>
        <div className="quantity">
          <a
            className="quantity_minus"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
            value={myState}
          >
            <span>-</span>
          </a>
          <input
            name="quantity"
            type="text"
            className="quantity_input "
            value="0"
          ></input>
          <a
            className="quantity_plus"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
