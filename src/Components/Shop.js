import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// import { actionCreaters } from "../State/index"
import { withdraw } from "../State/Action-Creators";
import { deposit } from "../State/Action-Creators";
const Shop = () => {
  const dispatch =  useDispatch();
    return (
        <div>
        <h2>Deposit / Withdraw money</h2>
        {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreaters.withdraw(100))}}>-</button> */}
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(withdraw(100))}}>-</button>
        Add this to cart
        {/* <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreaters.deposit(100))}}>-</button> */}
        <button className="btn btn-primary mx-2" onClick={()=>{dispatch(deposit(100))}}>+</button>

        </div>
    )
}

export default Shop