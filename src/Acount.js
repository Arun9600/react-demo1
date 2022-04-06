import { useState, useEffect } from "react";

// const Acount = () =>{

//     const [acon, setAcon] = useState(0);

//     const Acon = setTimeout(() =>{
//         setAcon(acon+1);
//     },1000);

//     return(

//         <>
//         <h4>Automatic Counter: {Acon}</h4>
//         </>
//     );
// }

const Acount = () =>
{

const [acon, setAcon] = useState(0);
 useEffect( () =>{
     let clean = setTimeout(()=>{
         setAcon(acon => acon+1);
     },1000);

     return () => clearTimeout(clean);
 });

    return(
        <>
            <h4>Automatic Counter: {acon}</h4>
        </>
    )
}




export default Acount;