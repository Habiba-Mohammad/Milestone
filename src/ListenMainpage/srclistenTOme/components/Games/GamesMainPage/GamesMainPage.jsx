import { Link } from "react-router-dom"
import MemoryGameImage from  "../../../../../images/Icons/memory-game.png"
import ListenGameImage from  "../../../../../images/Icons//ear.png"

import "./GamesMainPage.css"
const GamesMainPage=()=>{
    return(<>
    <div className="container GameMainPage">
<h1 className="  text-center m-3  "> هيا نلعب </h1>

    <div className=" d-flex row">

        <div className="col  p-3 ">
           <Link to={'/MemoryGame'} className="GameMainPage text-center m-4"> <img src={MemoryGameImage}/> <h2>الذاكرة البصرية</h2> </Link> 
        </div>
        <div className="col p-3  ">
           <Link to={'/listiningGame'} className="GameMainPage text-center m-4 "> <img src={ListenGameImage}/> <h2>الذاكرة السمعية </h2></Link> 
        </div>
    </div>
    </div>
    </>)
}
export default GamesMainPage