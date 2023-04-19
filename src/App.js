import "./styles.css";
import { useState, useEffect } from "react";

import ResponseDisplay from "./components/ResponseDisplay";
import Form from "./components/Form";

export default function App() {
  const [cardNum, setCardNum] = useState(null);

  const validCard = (nums) => {
    let sum = 0;
    //split number into individual string elements in array
    const newNum = nums.toString().split("");
    //revers split array, map each element, converting each element to a number
    const reversed = newNum.reverse().map(Number);
    //cycling through array, multiply every second element by 2
    for (let i = 1; i < reversed.length; i += 2) {
      reversed[i] = reversed[i] * 2;
      if (reversed[i] > 9) {
        const smallArr = reversed[i].toString().split("").map(Number);
        smallArr.forEach((i) => {
          sum += i;
        });
      }
    }
    //adding the numbers less than or equal to 9 to the sum
    for (let i = 0; i < reversed.length; i++) {
      if (reversed[i] <= 9) {
        sum += reversed[i];
      }
    }
    //check if number is true or false
    console.log(sum);
    if (sum % 10 === 0) {
      setCardNum("Valid Card Number");
    } else {
      setCardNum("Invalid Card Number");
    }
  };

  // useEffect(() => {
  //   validCard();
  // }, []);

  return (
    <div className="App">
      <h1>CREDIT CARD CHECKER</h1>
      <div className="card"></div>
      <Form cardSearch={validCard} />
      <ResponseDisplay response={cardNum} />
    </div>
  );
}
