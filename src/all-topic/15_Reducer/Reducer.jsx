import { useReducer } from "react";
import { initialState, reducerFunc } from "./CounterState";

const Reducer =()=>{
    const [count, dispatch] = useReducer(reducerFunc, initialState);

    return(
        <div>
                <h1>Learn Reducer</h1>

                <h2>Count:{count}</h2><br/>
                <button onClick={()=>dispatch(incre)}>Increment</button> <br/>
                <button onClick={()=>dispatch(decre)}>Decrement</button><br/>
                <button onClick={()=>dispatch(reset)}>Reset</button><br/>

        </div>
    )
}

export default Reducer;