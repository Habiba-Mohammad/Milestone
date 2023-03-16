import {React,useState} from "react"
import {Link} from "react-router-dom"
import"../Login/Login.css"
import welcomeImage from "../../..//images/stick-kids-g8e9718dcb_640.png"
export default function SignUp(){
    const [logIn,setLogIn]=useState({
        email:"",
        passward: Number,
    })


 function handleChange(event){
    const{name,value,type,checked}=event.target
    setLogIn(prevSignUp=>{
        return{
            ...prevSignUp,
           [name]:type==="checkbox"? checked :value
        }
    })}
console.log(SignUp)
function handleSubmit(event){
    event.preventDefault()
    if(logIn.passward === logIn.confirmPassward){
console.log(1)
    }
    else{
        console.log(0)
        return
    }
}

 return(
    <>

    <div className="main-form">
    <img  className="welcome-image" src={welcomeImage} alt/>

 <form>
 <h1> Log In </h1>
<label htmlFor="email"> Email
<input
id="email"
    type="email"
    placeholder="E-Mail"
    onChange={handleChange}
    name="email"
    value={logIn.email}
    />
    </label>
    <label htmlFor="password"> password

<input
id="password"
    type="password"
    placeholder="password"
    onChange={handleChange}
    name="passward"
    value={logIn.passward}
    />
    </label>
<div className="buttons">
<button className="Login" onSubmit={handleSubmit}>
    LOG IN
</button>
<button className="login">
<Link className="link" to="/signUp">SIGN UP</Link></button>
</div>
 </form>
 </div>
 </>)
 }