import { Link } from "react-router-dom"
import MemoryGameImage from  "../../../../../images/Icons/memory-game.png"
import "./GamesMainPage.css"
const GamesMainPage=()=>{
    return(<>
    <div className="container">
<h1 className=" GameMainPage text-center m-3  "> هيا نلعب </h1>

    <div className=" d-flex row">

        <div className="col  p-3 ">
           <Link to={'/MemoryGame'} className="GameMainPage text-center m-4"> <img src={MemoryGameImage}/> <h1>الذاكرة البصرية</h1> </Link> 
        </div>
        <div className="col p-3  ">
           <Link to={'/listiningGame'} className="GameMainPage text-center m-4 "> <img src={MemoryGameImage}/> <h1>الذاكرة السمعية </h1></Link> 
        </div>
    </div>
    </div>
    </>)
}
export default GamesMainPage