import {React,useState} from "react"
import {Link} from"react-router-dom"
import"../SignUp/SignUp.css"
import welcomeImage from "../../../images/stick-kids-g8e9718dcb_640.png"
export default function SignUp(){
    const [SignUp,setSignUp]=useState({
        firstName:"",
        lastName:"",
        email:"",
        passward: Number,
    })

 function handleChange(event){
    const{name,value,type,checked}=event.target
    setSignUp(prevSignUp=>{
        return{
            ...prevSignUp,
           [name]:type==="checkbox"? checked :value
        }
    })}
console.log(SignUp)
function handleSubmit(event){
    event.preventDefault()
    if(SignUp.passward === SignUp.confirmPassward){
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
    <img  className="welcome-image-signup" src={welcomeImage} alt/>

 <form>
 <h1>SIGN UP </h1>

    <label htmlFor="firstName"> FIRST NAME
    <input
    id="firstName"
    type="text"
    placeholder="First Name"
    onChange={handleChange}
    name="firstName"
    value={SignUp.firstName}
    /></label>
    <label htmlFor="lastName"> LAST NAME

 <input
 id="lastName"
    type="text"
    placeholder="last Name"
    onChange={handleChange}
    name="lastName"
    value={SignUp.lastName}
    />
    </label>
<label htmlFor="email"> Email
<input
id="email"
    type="email"
    placeholder="E-Mail"
    onChange={handleChange}
    name="email"
    value={SignUp.email}
    />
    </label>
    <label htmlFor="password"> password

<input
id="password"
    type="password"
    placeholder="password"
    onChange={handleChange}
    name="passward"
    value={SignUp.passward}
    />
    </label>
<div className="buttons">
<button className="signup" onSubmit={handleSubmit}>
    SIGN UP
</button>
<button className="login">
<Link className="link" to="/login">LOGIN</Link></button></div>
 </form>
 </div>
 </>)
 }