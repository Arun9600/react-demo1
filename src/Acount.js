import { useState } from "react";

const Acount = () =>{

    const [acon, setAcon] = useState(0);

    const Acon = setTimeout(() =>{
        setAcon(acon+1);
    },1000);

    return(

        <>
        <h4>Automatic Counter: {Acon}</h4>
        </>
    );
}

export default Acount;