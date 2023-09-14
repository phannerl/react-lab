import { Dispatch, SetStateAction, useState } from "react";
import "./index.css";

interface RollGameState {
  titlePosition?: boolean;
  setTitlePosition?: Dispatch<SetStateAction<boolean>>;
}

interface AddNewPlayerInterface {
  PlayerList: JSX.Element[];
  AddNewPlayer: Dispatch<SetStateAction<JSX.Element[]>>;
}

const StartButton = ({ titlePosition, setTitlePosition }: RollGameState) => {
  return (
    <button
      className="w-24 h-10 flex justify-center items-center bg-rose-500 rounded-lg"
      onClick={() => setTitlePosition && setTitlePosition(!titlePosition)}
    >
      Start
    </button>
  );
};

const ResetButton = ({ titlePosition, setTitlePosition }: RollGameState) => {
  return (
    <button
      className="w-24 h-10 flex justify-center items-center bg-rose-500 rounded-lg"
      onClick={() => setTitlePosition && setTitlePosition(!titlePosition)}
    >
      Reset
    </button>
  );
};

const GameTitle = ({ titlePosition }: RollGameState) => {
  return (
    <div
      className={`${
        titlePosition ? "text-8xl" : "text-6xl"
      } text-8xl roll-game__title`}
    >
      Roll Game
    </div>
  );
};

const Footer = () => {
  return <p>roll-game-test</p>;
};

const BoardPlayer = ({ PlayerList, AddNewPlayer }: AddNewPlayerInterface) => {
  return (
    <button
      disabled={PlayerList.length == 3 ? true : false}
      onClick={() => AddNewPlayer([...PlayerList, <PlayerUnit />])}
      className="h-full w-48 flex items-center justify-center text-8xl bg-gray-700 mb-9 font-mono rounded-2xl mr-4"
    >
      +
    </button>
  );
};

const PlayerUnit = () => {
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [stepCount, setStepCount] = useState(0);
  const [winner, setWinner] = useState(false);
  return (
    <div
      className={`h-full w-48 flex items-center justify-center flex-col ${
        winner ? "bg-green-700" : "bg-gray-700"
      } mb-9 font-mono rounded-2xl mr-4`}
    >
      <div className="flex h-4/5 justify-center items-center flex-col">
        <p className="text-8xl mb-8">{totalScore}</p>
        <div className="flex flex-row items-center justify-between w-full">
          <p>Rolled Score:</p>
          <p className="text-4xl">{score}</p>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <p>Step Counts:</p>
          <p className="text-4xl">{stepCount}</p>
        </div>
      </div>
      <div className="flex-1">
        <button
          disabled={winner ? true : false}
          onClick={() => {
            let tempScore = Math.floor(Math.random() * 6);
            setScore(Math.floor(tempScore));
            setTotalScore(totalScore + tempScore);
            setStepCount(stepCount + 1);
            if (totalScore >= 100) {
              setWinner(true);
            }
          }}
        >
          Roll again
        </button>
      </div>
    </div>
  );
};

const PlayerZone = () => {
  const [playerList, setPlayerList] = useState([<PlayerUnit />]);

  return (
    <div className="flex flex-row h-full">
      <BoardPlayer PlayerList={playerList} AddNewPlayer={setPlayerList} />
      <>{playerList}</>
    </div>
  );
};

const ScreenRollGame = () => {
  const [titlePosition, setTitlePosition] = useState(true);
  return (
    <div className="flex flex-col justify-between items-center h-full">
      <div className="flex flex-col justify-between items-center roll-game__bg rounded-3xl w-4/6 h-full">
        <div
          className={`h-1/3 flex justify-center ${
            titlePosition ? "items-end" : "items-center"
          } roll-game__bg--top`}
        >
          <GameTitle titlePosition={titlePosition} />
        </div>
        <div className="h-1/3 flex justify-center items-center">
          {titlePosition ? (
            <StartButton
              titlePosition={titlePosition}
              setTitlePosition={setTitlePosition}
            />
          ) : (
            <div className="flex flex-col h-full">
              <div className="flex flex-row h-full">
                <PlayerZone />
              </div>
              <div className="flex justify-center mt-3">
                <ResetButton
                  titlePosition={titlePosition}
                  setTitlePosition={setTitlePosition}
                />
              </div>
            </div>
          )}
        </div>
        <div className="h-1/3 flex justify-center items-end">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ScreenRollGame;
