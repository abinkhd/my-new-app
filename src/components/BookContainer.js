import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddBooks, BuyBooks } from "./Redux/BookAction";
import { SellBooks } from "./Redux/BookAction";

const BookContainer = () => {
  const totalBooks = useSelector((state) => state.NumberOfBooks);
  const callaction =useDispatch()
  const [bookName,setBookName]=useState('');
  return (
    <div>
      <h1>Total books: {totalBooks}</h1>
      <button onClick={() => callaction(BuyBooks())}>Buy</button>
      <button onClick={() => callaction(SellBooks())}>Sell</button>
      <input value={bookName} onChange={(e)=>setBookName(e.currentTarget.value)}/>
      <button onClick={()=>callaction(AddBooks(bookName))}>Add</button>
    </div>
  );
};

export default BookContainer;
