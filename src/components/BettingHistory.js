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
          className="mb-4 nav nav-pills"
        >
          <Tab eventKey="allBets" title="All Bets">
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="p-3 px-4">Game</th>
                    <th className="p-3 px-4">Time</th>
                    <th className="p-3 px-4">Bet Amount</th>
                    <th className="p-3 px-4">Payout</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {bets.map((bet, index) => (
                    <tr key={index}>
                      <td className="p-3 px-4">{bet.game}</td>
                      <td className="p-3 px-4">{bet.time}</td>
                      <td className="p-3 px-4">
                        <div className="d-flex align-items-center">
                          <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />
                          <h6 className="fw-medium mb-0">{bet.betAmount}</h6>
                        </div>
                      </td>
                      <td className="p-3 px-4">
                        <div className="d-flex align-items-center">
                          <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />
                          <h6 className="fw-medium mb-0">{bet.payout}</h6>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="wins" title="Wins">
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="p-3 px-4">Game</th>
                    <th className="p-3 px-4">Time</th>
                    <th className="p-3 px-4">Bet Amount</th>
                    <th className="p-3 px-4">Payout</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {bets.filter((bet) => Number(bet.payout) > 0).map((bet, index) => (
                    <tr key={index}>
                      <td className="p-3 px-4">{bet.game}</td>
                      <td className="p-3 px-4">{bet.time}</td>
                      <td className="p-3 px-4">
                        <div className="d-flex align-items-center">
                          <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />
                          <h6 className="fw-medium mb-0">{bet.betAmount}</h6>
                        </div>
                      </td>
                      <td className="p-3 px-4">
                        <div className="d-flex align-items-center">
                          <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />
                          <h6 className="fw-medium mb-0">{bet.payout}</h6>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab>
          <Tab eventKey="losses" title="Losses">
            <div className="table-responsive text-nowrap">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="p-3 px-4">Game</th>
                    <th className="p-3 px-4">Time</th>
                    <th className="p-3 px-4">Bet Amount</th>
                    <th className="p-3 px-4">Payout</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {bets.filter((bet) => Number(bet.payout) === 0).map((bet, index) => (
                    <tr key={index}>
                      <td className="p-3 px-4">{bet.game}</td>
                      <td className="p-3 px-4">{bet.time}</td>
                      <td className="p-3 px-4">
                        <div className="d-flex align-items-center">
                          <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />
                          <h6 className="fw-medium mb-0">{bet.betAmount}</h6>
                        </div>
                      </td>
                      <td className="p-3 px-4">
                        <div className="d-flex align-items-center">
                          <img src={gamaIcon} alt="GAMA" className="img-xs me-1" />
                          <h6 className="fw-medium mb-0">{bet.payout}</h6>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default BettingHistory;