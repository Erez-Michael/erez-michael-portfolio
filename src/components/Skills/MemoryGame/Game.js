import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import Card from "./Card";
import "./Game.scss";
import GameBg from "./GameBg";

const uniqueCardsArray = [
  {
    type: "Butter",
    image: require("../../../Assets/e.jpg"),
  },
  {
    type: "ButterFree",
    image: require("https://res.cloudinary.com/dcfqlsnzh/image/upload/v1673462820/readme-icons/k1nlanmsi5rza2ecauie.svg"),
  },
  {
    type: "Charmander",
    image: require("https://res.cloudinary.com/dcfqlsnzh/image/upload/v1673462820/readme-icons/siodyp09azdsz6rlnsmt.svg"),
  },
  {
    type: "Squirtle",
    image: require("https://res.cloudinary.com/dcfqlsnzh/image/upload/v1673462818/readme-icons/yvwzjpvrqnybeh6xev66.svg"),
  },
  {
    type: "Pidgetto",
    image: require("https://res.cloudinary.com/dcfqlsnzh/image/upload/v1673462818/readme-icons/gvucbz7hljvdslzzq07d.svg"),
  },
  {
    type: "Bulbasaur",
    image: require("https://res.cloudinary.com/dhcrarc6f/image/upload/v1676649490/insomnia-svgrepo-com_zju7i2.svg"),
  },
];

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
const Game = () => {
  const [cards, setCards] = useState(() =>
    shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueCardsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };

  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(uniqueCardsArray.concat(uniqueCardsArray)));
  };

  return (
    <>
      <GameBg />
      <div className="App">
        <div className="modal-body">
          <header>
            <div>Memory Game</div>
          </header>
          <div className="container">
            {cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  card={card}
                  index={index}
                  isDisabled={shouldDisableAllCards}
                  isInactive={checkIsInactive(card)}
                  isFlipped={checkIsFlipped(index)}
                  onClick={handleCardClick}
                />
              );
            })}
          </div>
          <footer>
            <div className="score">
              <div className="moves">
                <span className="bold">Moves:</span> {moves}
              </div>
              {localStorage.getItem("bestScore") && (
                <div className="high-score">
                  <span className="bold">Best Score:</span> {bestScore}
                </div>
              )}
            </div>
            <button className="restart" onClick={handleRestart}>
              <wrapper>
                <h3  id="style-2" data-replace="Restart">
                  <span>Restart</span>
                </h3>
              </wrapper>
            </button>
          </footer>
          <Dialog
            open={showModal}
            disableEscapeKeyDown
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              Hurray!!! You completed the challenge
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                You completed the game in {moves} moves. Your best score is
                {bestScore} moves.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <button onClick={handleRestart}>Restart</button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </>
  );
};

export default Game;
