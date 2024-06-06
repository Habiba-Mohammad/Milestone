// import { useState, useEffect } from "react";
// import { selectGame } from "../../../../../Data/ListenData";
// import ReactAudioPlayer from "react-audio-player";
// import './Choose.css';

// const Choose = () => {
//   const [score1, setScore1] = useState(0);
//   const [clicked, setClicked] = useState([]);
//   const [games, setGames] = useState([]);

//   useEffect(() => {
//     console.log("selectGame data:", selectGame); // Log the data
//     if (Array.isArray(selectGame) && selectGame.length > 0) {
//       setClicked(new Array(selectGame.length).fill(false));
//       setGames(selectGame);
//     } else {
//       console.error("selectGame is not an array or is empty:", selectGame);
//     }
//   }, []);

//   useEffect(() => {
//     console.log("Loaded games:", games);
//   }, [games]);

//   const handleSelection = (gameIndex, answerIndex) => {
//     if (clicked[gameIndex]) return; // Prevent multiple clicks on the same game

//     setClicked(prevClicked => prevClicked.map((val, idx) => (idx === gameIndex ? true : val)));
//     if (games[gameIndex].correct === games[gameIndex].answers[answerIndex]) {
//       setScore1(prevScore => prevScore + 1);
//     }
//   };

//   if (games.length === 0) {
//     return <div>Loading games...</div>; // Or handle the empty state appropriately
//   }

//   return (
//     <div className="container ">
//       <div className="ChooseContainer ">
//         <h1 className="link">اسمع واختار</h1>
//         <h2 className="text-danger text-center">عدد إجاباتك الصحيحة {score1}</h2>

//         {games.map((game, gameIndex) => (
//           <div key={gameIndex}>
//             <ReactAudioPlayer className="audioGame m-3 col-4" src={game.voice} controls />
//             <div className="imgChooseGameContainer">
//               <div className="row">
//                 {Object.entries(game.answers).map(([key, answer], answerIndex) => (
//                   <div
//                     key={key}
//                     className="col-3 "
//                     type="button"
//                     onClick={() => handleSelection(gameIndex, key)}
//                   >
//                     <img src={answer} className="w-75 h-75 m-4 rounded-top imgChooseGame" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="col-3">الدرجات {score1}</div>
//     </div>
//   );
// };

// export default Choose;

import { useState, useEffect } from "react";
import { selectGame } from "../../../../../Data/ListenData";
import ReactAudioPlayer from "react-audio-player";
import './Choose.css';

const Choose = () => {
  const [score1, setScore1] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (Array.isArray(selectGame) && selectGame.length > 0) {
      setClicked(new Array(selectGame.length).fill(false));
      setGames(selectGame);
    } else {
      console.error("selectGame is not an array or is empty:", selectGame);
    }
  }, []);

  useEffect(() => {
    console.log("Loaded games:", games);
  }, [games]);

  const handleSelection = (gameIndex, answerIndex) => {
    if (clicked[gameIndex]) return;

    setClicked(prevClicked => prevClicked.map((val, idx) => (idx === gameIndex ? true : val)));
    if (games[gameIndex].correct === games[gameIndex].answers[answerIndex]) {
      setScore1(prevScore => prevScore + 1);
    }

    // Add animation effect
    document.getElementById(`answer-${gameIndex}-${answerIndex}`).classList.add('bounce');
  };

  if (games.length === 0) {
    return <div className="loading">Loading games...</div>;
  }

  return (
    <div className="container">
      {/* Sticky Score Bar */}
      <div className="sticky-bar">
        <h2 className="score-display">عدد اجاباتك الصحيحة : {score1}</h2>
      </div>

      <div className="choose-container">
        <h1 className="title link text-center">اسمع واختار</h1>

        {games.map((game, gameIndex) => (
          <div key={gameIndex} className="game-section">
            <ReactAudioPlayer className="audio-player audioGame" src={game.voice} controls />
            <div className="answers-container">
              {Object.entries(game.answers).map(([key, answer], answerIndex) => (
                <div
                  key={key}
                  id={`answer-${gameIndex}-${answerIndex}`}
                  className={`answer ${clicked[gameIndex] ? 'disabled' : ''}`}
                  onClick={() => handleSelection(gameIndex, key)}
                >
                  <img src={answer} alt={`Answer ${key}`} className="answer-image" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
