import { useState } from "react";
import Acount from "./Acount";
const Counter = () =>{

    const[count,setCount] = useState(0);

    const CountIncrement = () =>{
        setCount(count+1);
    }

    const CountDecrement = () =>{
        setCount(count-1);
    }

    const CountReset = () =>{
        setCount(0);
    }

    return(
        <>
          <h1 style={{textAlign:"center"}}>Counter Page</h1>
            <div className="countercol">
                    <div className="countercol1">
                        <h2 style={{textAlign:"center"}}>Manual Counter</h2>
                            <h4>Count: {count}</h4>
                            <button onClick={CountIncrement}>Counter Increment</button>
                            <button onClick={CountDecrement}>Counter Decrement</button>
                            <button onClick={CountReset}>Counter Reset</button>
                        </div>
                        <div className="countercol2">
                            <h2 style={{textAlign:"center"}}>Automatic Counter</h2>
                            <Acount />
                        </div>
                </div>
                
                
          
        </>
    );
}

export default Counter;