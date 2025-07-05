import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Orders() {
  const [allOrders, setAllOrders] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allOrders")
      .then((res) => {
        const orders = res.data;
        setAllOrders(orders);
        setIsEmpty(orders.length === 0);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isEmpty) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't places any orders today</p>
          <Link to="/" className="btn">
            Get Started
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h3 className="title">Orders ({allOrders.length})</h3>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((stock, idx) => {
                return (
                  <tr key={idx}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price}</td>
                    <td>{stock.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Orders;
