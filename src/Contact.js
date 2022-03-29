import { useState } from "react";
const Contact = () =>{

 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [mobile, setMobile] = useState('');
 const [opt, setOpt] = useState('Test1');
 const [textarea, setTextarea] = useState('');

 const submitHandler = (e) => {
     e.preventDefault();
 }

    return(
        <>
     <div className="contactPage">
     <div className="contactForm">
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input type="text" placeholder="Name" value={name} onChange={(e)=> {setName(e.target.value)}}/>
                <label>Email</label>
                <input type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <label>Mobile Number</label>
                <input type="tel" placeholder="Mobile number" value={mobile}  onChange={(e)=>{setMobile(e.target.value)}}/>
                <label>Options</label>
                <select type="text" value={opt} onChange={(e) => {setOpt(e.target.value)}}>
                    <option value="Test1">Test1 </option>
                    <option value="Test2">Test2 </option>
                </select>
                <label>Message</label>
                <textarea type="text" placeholder="Message" value={textarea} onChange={(e)=> {setTextarea(e.target.value)}}/>
                <input type="submit" />
            </form>
        </div>

        <div className="formResults">
            <div className="results">
                <h2>Real time form values</h2>
                <p>Name : {name}</p>
                <p>Email: {email}</p>
                <p>Mobile Number: {mobile}</p>
                <p>Selected Option: {opt}</p>
                <p>Message: {textarea}</p>
            </div>
            
        </div>
     </div>
        
        
        
        </>
    );
}

export default Contact;