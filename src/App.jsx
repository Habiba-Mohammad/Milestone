import {React,useState} from 'react'
import { BrowserRouter, Route,Routes,Link } from 'react-router-dom'
import  "../node_modules/bootstrap/dist/css/bootstrap.css"
import  "../node_modules/bootstrap/dist/js/bootstrap";
import Nav  from './Components/Nav/Nav'
import './App.css'
import Hero from"./Components/Hero/Hero"
import SingUp from"./Components/Forms/SignUp/SignUp"
import Login from "./Components/Forms/Login/Login"
import Data from "./Data/Data"
import Stages from "./Components/Stages/Stages"
import Footer from './Components/Footer/Footer'
import MainPage from './Components/MainPage/MainPage';
import AboutUs from './Components/AboutUs/AboutUs'
import Articles from './Components/Articles/Articles'
import Help from './Components/Help/Help'
import DataEnglish from './Data/DataEnglish'
import StagesEnglish from './Components/Stages/StagesEnglish/StagesEnglish'
import EnglishMainPage from './Components/EnglishPages/EnglishMainPage/EnglishMainPage'
import EnglishNav from './Components/Stages/StagesEnglish/EnglishNav/EnglishNav'
import Qs from './Components/Qs/Qs'
import Article2 from './Components/Articles/Article2'
import Article3 from './Components/Articles/Article3';
import MainAPage from './Components/Articles/MainAPage'
import MainListenPage from "./ListenMainpage/srclistenTOme/components/MainPage/MainPage"
//
import AnimalSounds from './ListenMainpage/srclistenTOme/components/Audio/Audio.jsX'
import ObjectSounds from './ListenMainpage/srclistenTOme/components/Audio/ObjectAudio'
import Transportations from "./ListenMainpage/srclistenTOme/components/Audio/Transport"
import Games from './ListenMainpage/srclistenTOme/components/Games/GamesMainPage/Games';
import GamesMainPage from './ListenMainpage/srclistenTOme/components/Games/GamesMainPage/GamesMainPage';
import InsideHome from './ListenMainpage/srclistenTOme/components/Audio/insideHouse';
import VerbsAudio from './ListenMainpage/srclistenTOme/components/Audio/VerbsAudio';
import Choose from "./ListenMainpage/srclistenTOme/components/Games/Choose/Choose"
import { selectGame } from './Data/ListenData';
function App() {

  let itemsEnglish=DataEnglish.map(item=>{
    return(<>
      <StagesEnglish
      key={Date.now()}
      StageTitle={item.StageTitle}
      title={item.title}
      feedingTitle={item.feedingTitle}
      languageTitle={item.languageTitle}
      socialTitle={item.socilaTitle}
      cognitionTitle={item.cognitionTitle}
      movementTitle={item.movementTitle}
      feeding={item.feeding}
      social={item.social}
      language={item.language}
      cognition={item.cognitive}
      movement={item.movement}/>
      </>)})
  let items=Data.map(item=>{
    return(<>
      <Stages
      
      key={Date.now()}
      StageTitle={item.StageTitle}
      title={item.title}
      feedingTitle={item.feedingTitle}
      languageTitle={item.languageTitle}
      socialTitle={item.socilaTitle}
      cognitionTitle={item.cognitionTitl}
      movementTitle={item.movementTitle}
      feeding={item.feeding}
      social={item.social}
      language={item.language}
      cognition={item.cognitive}
      movement={item.movement}/>
</>
    )
  })
//   let DetailedAss=DetailedAssesment.map(item=>{
//     return(<>
//       <Stages
      
//       key={Date.now()}
//       StageTitle={item.StageTitle}
//       title={item.title}
//       feedingTitle={item.feedingTitle}
//       languageTitle={item.languageTitle}
//       socialTitle={item.socilaTitle}
//       cognitionTitle={item.cognitionTitl}
//       movementTitle={item.movementTitle}
//       feeding={item.feeding}
//       social={item.social}
//       language={item.language}
//       cognition={item.cognitive}
//       movement={item.movement}/>
// </>
//     )
//   })



  return (
<>

<Nav/>
{/* <Audio/> */}
<Routes>
<Route  exact path="/Milestone" element={<><Hero/> </>}/>

  <Route  exact path="/Main" element={<><Hero/></>}/>
{/* <Route path="signUp" element={<><SignUp/> </>}/>  
<Route path="login" element={<><Login/> </>}/>   */}
<Route exact path="/Arabic" element={<><MainPage/></>}/>  

<Route exact path="/English" element={<><EnglishMainPage/></>}/>  
<Route exact path="/about" element={<AboutUs/> }/>  
<Route exact  path="/article" element={<Articles/> }/> 
<Route exact path="/qs" element={<><MainAPage/></>}/>  
<Route exact path="/help" element={<Help/>}/>  
  <Route path="/stage1" element={items[0]}/> 
  <Route path="/stage2" element={items[1]}/> 
  <Route path="/stage3" element={items[2]}/>
  <Route path="/stage4" element={items[3]}/> 
  <Route path="/stage5" element={items[4]}/> 
  <Route path="/stage6" element={items[5]}/> 
  <Route path="/stage7" element={items[6]}/> 
  <Route path="/stage8" element={items[7]}/> 
  <Route path="/stage9" element={items[8]}/> 
  <Route path="/stage10" element={items[9]}/> 
  <Route path="/stage11" element={items[10]}/> 
  <Route path="/stage12" element={items[11]}/> 
  <Route path="/stageEnglish1"  exact element={itemsEnglish[0]}/> 
  <Route path="/stageEnglish2" element={itemsEnglish[1]}/> 
  <Route path="/stageEnglish3" element={itemsEnglish[2]}/>
  <Route path="/stageEnglish4" element={itemsEnglish[3]}/> 
  <Route path="/stageEnglish5" element={itemsEnglish[4]}/> 
  <Route path="/stageEnglish6" element={itemsEnglish[5]}/> 
  <Route path="/stageEnglish7" element={itemsEnglish[6]}/> 
  <Route path="/stageEnglish8" element={itemsEnglish[7]}/> 
  <Route path="/stageEnglish9" element={itemsEnglish[8]}/> 
  <Route path="/stageEnglish11" element={itemsEnglish[10]}/> 
  <Route path="/stageEnglish10" element={itemsEnglish[9]}/> 
  <Route path="/stageEnglish12" element={itemsEnglish[11]}/> 
<Route path='/Art1' element={<Qs/>}/>
<Route path='/Art2' element={<Article2/>}/>
<Route path='/Art3' element={<Article3/>}/>

<Route path='/ListentoTransports' element={<Transportations/>}/>
<Route path='/ListentoAnimals' element={<AnimalSounds/>}/>
<Route path='/ListentoOutside' element={<ObjectSounds/>}/>
<Route path='/ListentoInsideHouse' element={<InsideHome/>}/>
<Route path='/ListenToVerbs' element={<VerbsAudio/>}/>
<Route path='//listen' element={<MainListenPage />}/>
<Route path='/GamesMainPage' element={<GamesMainPage/>}/>
<Route path='/MemoryGame' element={<Games/>}/>
<Route path='/listiningGame' element={<Choose />}/>
</Routes> 
{/* <img className='doctor' src={doctor} alt="doctor"/> */}
<Footer/>

</>

  )
}
export default App
