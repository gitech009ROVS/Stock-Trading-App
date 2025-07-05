import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allHoldings")
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const labels = allHoldings.map((part) => {
    return part.name;
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const totalInvestment = allHoldings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );
  const totalCurrentValue = allHoldings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );
  const totalPL = totalCurrentValue - totalInvestment;
  const totalPLPercentage = (totalPL / totalInvestment) * 100;
  const plClass = totalPL >= 0 ? "profit" : "loss";

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, idx) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayChangeClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={idx}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profitClass}>{stock.net}</td>
                  <td className={dayChangeClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{totalCurrentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5 className={plClass}>
            {totalPL.toFixed(2)} ({totalPLPercentage.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
}

export default Holdings;
