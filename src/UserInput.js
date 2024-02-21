import { useState } from "react";
export function Userinput({
  children,
  inputLabel1,
  inputLabel2,
  Color,
  onClick,
}) {
  const [username, setUserName] = useState("");
  const [amount, setAmount] = useState("");

  function handleOnclick() {
    onClick(username, amount);
    setUserName("");
    setAmount(0);
  }
  return (
    <div className={"actions " + Color}>
      <p>{children}</p>
      <div className="inputs">
        {inputLabel2 ? (
          <input
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        ) : (
          ""
        )}
        <input
          type="Number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        ></input>
        <i
          className="fa-solid fa-arrow-right"
          onClick={() => handleOnclick()}
        ></i>
      </div>
      <div className="transerLabel">
        <span>{inputLabel1}</span>
        <span>{inputLabel2}</span>
      </div>
    </div>
  );
}
