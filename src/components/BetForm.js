import React, { useState } from "react";

const BetForm = ({ onPlaceBet }) => {
  const [betAmount, setBetAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBet = {
      game: "Sample Bet", // Replace here with the actual game logic
      time: new Date().toLocaleTimeString(),
      betAmount: parseInt(betAmount),
      payout: 0, // Logic for payout would go here
    };
    onPlaceBet(newBet);
    setBetAmount("");
  };

  return (
    <>
      <div className="card br-10">
        <div className="card-header bg-transparent p-4 py-3">
          <h5 className="mb-0">Place Your Bet</h5>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="form-label" htmlFor="bet-amount">
                Bet Amount
              </label>
              <div className="input-group input-group-md">
                <span className="input-group-text">
                  <img
                  className="ti ti-file-text fs-4"
                    src={require("../assets/images/gama_icon.png")}
                    alt="GAMA Icon"
                  />
                </span>
                <input
                  type="text"  
                  className="form-control" aria-label="BetAmount" aria-describedby="basic-addon1"
                  id="bet-amount"
                  value={betAmount}
                  onChange={(e) => setBetAmount(e.target.value)}
                  placeholder="Enter Amount"
                />
                <div className="d-flex flex-row justify-content-between align-items-center text-sm mt-2">
                  <div className="button-group">
                    <button type="button" className="btn btn-light">
                      Min
                    </button>
                    <button type="button" className="btn btn-light ">
                      Max
                    </button>
                  </div>
                  <div className="d-flex align-items-center ms-4">
                    <p className="fw-medium mb-0 ms-5">Balance :10,390</p>
                    <img
                      src={require("../assets/images/gama_icon.png")}
                      className="img-xs ms-1"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-top pt-4 mt-4 mb-6">
              <h5 className="card-title">Select Chip Value</h5>
              <div className="button-group">
                <button className="btn chip-bg d-inline-flex align-items-center justify-content-center round-60">
                  1
                </button>
                <button className="btn chip-bg d-inline-flex align-items-center justify-content-center round-60">
                  5
                </button>
                <button className="btn chip-bg d-inline-flex align-items-center justify-content-center round-60">
                  10
                </button>
                <button className="btn chip-bg d-inline-flex align-items-center justify-content-center round-60">
                  50
                </button>
                <button className="btn chip-bg d-inline-flex align-items-center justify-content-center round-60">
                  100
                </button>
                <button className="btn chip-bg d-inline-flex align-items-center justify-content-center round-60">
                  500
                </button>
                <button className="btn chip-bg d-inline-flex align-items-center justify-content-center round-60">
                  1K
                </button>
                <button className="btn chip-bg d-inline-flex align-items-center justify-content-center round-60">
                  5K
                </button>
              </div>
            </div>

            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-lg btn-success">
                Place Bet
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="card br-10 mt-4">
        <div className="card-body p-4">
          <div className="bg-label-primary p-3 pt-4 pb-4 rounded mb-3">
            <div className="d-flex">
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="fw-medium mb-0">Total Bets</h6>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <h5 className="fw-medium mb-0">2</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-label-primary p-3 pt-4 pb-4 rounded">
            <div className="d-flex">
              <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                <div className="me-2">
                  <h6 className="fw-medium mb-0">Total Bet Amount</h6>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <h5 className="fw-medium mb-0 me-1">50</h5>
                  <img
                    src={require("../assets/images/gama_icon.png")}
                    className="img-s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetForm;
