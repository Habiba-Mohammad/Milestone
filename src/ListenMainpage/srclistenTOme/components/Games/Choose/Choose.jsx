import { useState, useEffect } from "react";
import { selectGame } from "../../../../../Data/ListenData";
import ReactAudioPlayer from "react-audio-player";
import './Choose.css';

const Choose = () => {
  const [score1, setScore1] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [games, setGames] = useState([]);

  useEffect(() => {
    console.log("selectGame data:", selectGame); // Log the data
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
    if (clicked[gameIndex]) return; // Prevent multiple clicks on the same game

    setClicked(prevClicked => prevClicked.map((val, idx) => (idx === gameIndex ? true : val)));
    if (games[gameIndex].correct === games[gameIndex].answers[answerIndex]) {
      setScore1(prevScore => prevScore + 1);
    }
  };

  if (games.length === 0) {
    return <div>Loading games...</div>; // Or handle the empty state appropriately
  }

  return (
    <div className="">
      <div className="ChooseContainer col container w-75 p-3">
        <h1 className="">اسمع واختار</h1>
        <h2>عدد إجاباتك الصحيحة {score1}</h2>

        {games.map((game, gameIndex) => (
          <div key={gameIndex}>
            <ReactAudioPlayer className="audioGame m-3 col-4" src={game.voice} controls />
            <div className="imgChooseGameContainer">
              <div className="row">
                {Object.entries(game.answers).map(([key, answer], answerIndex) => (
                  <div
                    key={key}
                    className="col-3 "
                    type="button"
                    onClick={() => handleSelection(gameIndex, key)}
                  >
                    <img src={answer} className="w-75 h-75 m-4 rounded-top imgChooseGame" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="col-3">الدرجات {score1}</div>
    </div>
  );
};

export default Choose;