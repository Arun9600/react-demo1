import { useState } from "react";

const About = () =>{

    const [text, setText] = useState("Default text");

    const changeText = () => {
        setText("Text changed on click..!!!");
    }
    return(
     <>
        <p>We recommend that you check out the tic-tac-toe game before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.</p>
        <p>You can close the tic-tac-toe game once you’re familiar with it. We’ll be starting from a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.</p>

        <div className="rerender">
            <p>{text}</p>
            <button onClick={changeText}>Re Rendering</button>
        </div>
     </>
    );
}

export default About;