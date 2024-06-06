import "./MainPage.css"
import { Link } from "react-router-dom"
import {MainPageData} from "../../../../Data/ListenData"

const MainPage = () => {
    return(

        <>
<div className=" MainPageCont">
  <div className="row  ">
  {MainPageData.map((item=>{
    return<>

    <div className="card col-4  p-5 " >
    <Link to={`/${item.link}`} className="button_wrapper">
  <img src={item.image} className="" alt="..."/>
  <span className="button">
        {item.name}
        </span>
        </Link>

      </div>
      

 
      </>
  }))}
  
        </div>
        </div>


     </>
    )
}
export default MainPage