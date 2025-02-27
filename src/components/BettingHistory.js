import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import gamaIcon from "../assets/images/gama_icon.png";

const BettingHistory = ({ bets }) => {
  return (
    <div className="card br-10">
      <div className="card-header bg-transparent p-4 py-3">
        <h5 className="mb-0">Betting History</h5>
      </div>
      <div className="card-body p-4">
        <Tabs
          defaultActiveKey="allBets"
          id="betting-tabs"
          variant="pills"
          className="mb-4"
        >
          <Tab eventKey="allBets" title="All Bets">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Game</th>
                  <th>Time</th>
                  <th>Bet Amount</th>
                  <th>Payout</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((bet, index) => (
                  <tr key={index}>
                    <td>{bet.game}</td>
                    <td>{bet.time}</td>
                    <td>
                      <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />{" "}
                      {bet.betAmount}
                    </td>
                    <td>
                      <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />{" "}
                      {bet.payout}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="wins" title="Wins">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Game</th>
                  <th>Time</th>
                  <th>Bet Amount</th>
                  <th>Payout</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((bet, index) => (
                  <tr key={index}>
                    <td>{bet.game}</td>
                    <td>{bet.time}</td>
                    <td>
                      <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />{" "}
                      {bet.betAmount}
                    </td>
                    <td>
                      <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />{" "}
                      {bet.payout}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="losses" title="Losses">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Game</th>
                  <th>Time</th>
                  <th>Bet Amount</th>
                  <th>Payout</th>
                </tr>
              </thead>
              <tbody>
                {bets.map((bet, index) => (
                  <tr key={index}>
                    <td>{bet.game}</td>
                    <td>{bet.time}</td>
                    <td>
                      <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />{" "}
                      {bet.betAmount}
                    </td>
                    <td>
                      <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />{" "}
                      {bet.payout}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default BettingHistory;
