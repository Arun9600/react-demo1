import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Counter from "./Counter";
import Contact from "./Contact";
const App = () => {
  return (
    <>
     <div className="main">
         <BrowserRouter>
            <Routes>
              <Route path="/" element={<NavBar/>}>
                 <Route index element={<Home/>}/>
                 <Route path="/about" element={<About />}/>
                 <Route path="/counter" element={<Counter />}/>
                 <Route path="/contact" element={<Contact />}/>
              </Route>
            </Routes>
         </BrowserRouter>
     </div>
    </>
  );
}

export default App;
