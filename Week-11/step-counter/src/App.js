import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  function inccCount() {
    return {
      type: "INCC",
    };
  }

  function resetCount() {
    return {
      type: "RESET",
    };
  }

  const b1 = {
    width: "200px",
    // height:"100px",
    marginBottom:"5px",
    backgroundColor:"#663797",
    color:"white",
    border:"none",
    padding:"10px"
    
  };

  const b2 = {
    width: "200px",
    backgroundColor:"#dedede",
    color:"black",
    border:"none",
    padding:"10px"
  };

  return (
    <div className="App">
      <h3>You've walked {state.count} steps today!</h3>
      <div>
      <button style={b1} onClick={()=>dispatch(inccCount())}>
        <b>Add a Step</b>
      </button>
      </div>
      <button style={b2} onClick={()=>dispatch(resetCount())}>
        <b>Reset Steps</b>
      </button>
    </div>
  );
}

export default App;