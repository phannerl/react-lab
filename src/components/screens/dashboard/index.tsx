import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import ScreenCreditCard from "../credit-card";
import ScreenRollGame from "../roll-game";

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen w-screen dboard__bg  style={{cursor: 'none'}}">
      <div className="w-full flex justify-between dboard__header">
        <div className="flex justify-around w-1/5 text-white">Dashboard</div>
        <div className="flex justify-around w-1/3 text-white">
          <a href="/card" className="text-sm font-semibold leading-6">
            Card
          </a>
          <a href="/roll-game" className="text-sm font-semibold leading-6">
            Roll Game
          </a>
          <a href="#" className="text-sm font-semibold leading-6">
            New
          </a>
        </div>
      </div>
      <div className="flex-1 pt-2">
        <BrowserRouter>
          <Routes>
            <Route path="/card" element={<ScreenCreditCard />} />
            <Route path="/roll-game" element={<ScreenRollGame />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Dashboard;
