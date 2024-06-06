import { Link } from "react-router-dom"
import MemoryGameImage from  "../../../../../images/Icons/memory-game.png"
import ListenGameImage from  "../../../../../images/Icons/ear.jfif"

import "./GamesMainPage.css"
const GamesMainPage=()=>{
    return(<>
    <div className="container GameMainPage">
        
<h1 className="  text-center m-3  "> هيا نلعب </h1>

    <div className=" d-flex row">

        <div className="col p-3 ">
           <Link to={'/MemoryGame'} className="GameMainPage w-25  m-4"> <img className='w-75' src={MemoryGameImage}/> <h2 className="text-center mt-4">الذاكرة البصرية</h2> </Link> 
        </div>
        <div className="col p-3  ">
           <Link to={'/listiningGame'} className="GameMainPage w-25 m-4 "> <img className=" w-75" src={ListenGameImage}/> <h2 className="text-center mt-4">الذاكرة السمعية </h2></Link> 
        </div>
    </div>
    </div>
    </>)
}
export default GamesMainPage