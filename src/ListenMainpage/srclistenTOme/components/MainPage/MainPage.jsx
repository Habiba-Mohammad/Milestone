import animalImage from "../../images/cat.png"
import Audio from "../Audio/Audio"
import "./MainPage.css"
import { Link } from "react-router-dom"
import {MainPageData} from "../Data"
import Button from "../Buttons/Button"
const MainPage = () => {
    return(

        <>
<div className=" MainPageCont">
  <div className=" row ">
  {MainPageData.map((item=>{
    return<>

    <div className="card     p-5 " >
    <Button name={item.title} links={item.link}/>

  <img src={item.image} className="   " alt="..."/>
  <span className="button">
        <Link to={item.link} class="button__wrapper">{item.name}</Link>

        </span>


      </div>
      

 
      </>
  }))}
  
        </div>
        </div>


     </>
    )
}
export default MainPage