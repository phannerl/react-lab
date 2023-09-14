import { useState } from "react";
import { CardCredit } from "../../cards";
import "./index.css";

function ScreenCreditCard() {
  const [arrCard, setArrCard] = useState([<CardCredit />]);
  return (
    <div className="sr-credit-card__bg">
      <h1 className="text-3xl font-bold underline">List your cards</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => setArrCard([...arrCard, <CardCredit />])}
      >
        +
      </button>
      {arrCard}
    </div>
  );
}

export default ScreenCreditCard;
