import React from "react";
import { positions } from "../data/data.js";
import { useState, useEffect } from "react";
import axios from "axios";

function Positions() {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allPositions")
      .then((res) => {
        console.log(res.data);
        setAllPositions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, idx) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0;
              const profitClass = isProfit ? "profit" : "loss";
              const dayChangeClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={idx}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profitClass}>
                    {(currVal - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayChangeClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Positions;
