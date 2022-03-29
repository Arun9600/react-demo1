import img1 from "./reactm.webp";
const HomeContent2 = () =>{
    return (
        <>
            <div className="article">
                <h1>Try React</h1>
                <div className="articleCol1">
                    <p>React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.</p>
                </div>
                <div className="articleCol2">
                   <img src={img1} alt="reactImg"/> 
                </div>
            </div>
        </>
    );
}

export default HomeContent2;