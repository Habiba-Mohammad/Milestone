import { Link } from "react-router-dom"
import MemoryGameImage from  "../../../../../images/Icons/memory-game.png"
const GamesMainPage=()=>{
    return(<>
<h1 className="text-center m-3  "> هيا نلعب </h1>

    <div className="container d-flex row">

        <div className="col  m-4 p-3">
           <Link to={'/MemoryGame'} className=" m-4"> <img src={MemoryGameImage}/> <h1>الذاكرة البصرية</h1> </Link> 
        </div>
        <div className="col m-4 p-3  ">
           <Link to={'/listiningGame'} className=" m-4 "> <img src={MemoryGameImage}/> <h1>الذاكرة السمعية </h1></Link> 
        </div>
    </div>
    </>)
}
export default GamesMainPage