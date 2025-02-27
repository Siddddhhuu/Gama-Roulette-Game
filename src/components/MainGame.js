import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import BetForm from "./BetForm";
import RouletteTable from "./RouletteTable";
import BettingHistory from "./BettingHistory";

const MainGame = () => {
  const [bets, setBets] = useState([
    { game: "Third Column", time: "07:23:10 AM", betAmount: 12, payout: 84 },
    { game: "Even", time: "07:23:10 AM", betAmount: 4, payout: 0 },
  ]);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handlePlaceBet = (bet) => {
    setBets([...bets, bet]);
  };

  return (
    <section className="main-game-block" ref={ref}>
      <div className="auto-container">
        <div className={`row clearfix ${inView ? "appear" : ""}`}>
          <div className="place-bet-block col-lg-4 col-md-12 col-sm-12">
            <BetForm onPlaceBet={handlePlaceBet} />
          </div>
          <div className="place-bet-block col-lg-8 col-md-12 col-sm-12">
            <RouletteTable />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <BettingHistory bets={bets} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainGame;
