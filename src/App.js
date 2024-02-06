import { useState } from "react";

const accounts = [
  {
    userName: "a",
    pin: "111",
    movements: [200, 100, -23, 21, 2, -34, 56, 23],
    id: 0,
  },
  {
    userName: "khan",
    pin: "111",
    movements: [200, -100, 23, 21, 2, 34, -56, 23],
    id: 1,
  },
  {
    userName: "sufiyan",
    pin: "333",
    movements: [400, -100, 23, 21, 2, 34, -56, 23],
    id: 1,
  },
];
export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  let accountsCopy = accounts;
  function handleLogin(userId, password) {
    accountsCopy.forEach((acc) =>
      acc.userName === userId && acc.pin === password ? setCurrentUser(acc) : ""
    );
  }
  return (
    <div className="App">
      <Header currentUser={currentUser} handleLogin={handleLogin} />
      <Main opaccity={currentUser ? "login" : "logout"} />
    </div>
  );
}

function Header({ handleLogin, currentUser }) {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <header>
      <nav className="navbar">
        <div className="greetings">
          <p>{currentUser ? " Good Day " + currentUser.userName : "Login"}</p>
        </div>
        <div className="logo">
          <img src="https://bankist.netlify.app/logo.png" alt="logo"></img>
        </div>
        <div className="login">
          <input
            className="user"
            placeholder="user"
            onChange={(e) => setUserId(e.target.value)}
          ></input>
          <input
            className="id"
            placeholder="id"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <i
            className="fa-solid fa-arrow-right"
            onClick={() => handleLogin(userId, password)}
          ></i>
        </div>
      </nav>
    </header>
  );
}

function Main({ opaccity }) {
  console.log(opaccity);
  return (
    <div className="main-wrapper" id={opaccity}>
      <div className="main">
        <CurrentBalance />
        <Status />
        <div className="main-content">
          <MovementList />
          <div className="Userinputs">
            <Userinputs
              inputLabel1={"Transfer to"}
              inputLabel2={"Amount"}
              Color={"yellow"}
              twoInput={true}
            >
              Transfer Money
            </Userinputs>
            <Userinputs inputLabel1={"Amount"} Color={"green"} twoInput={false}>
              Request Loan
            </Userinputs>
            <Userinputs
              inputLabel1={"Confirm user"}
              inputLabel2={"Confirm pin"}
              Color={"red"}
              twoInput={true}
            >
              Close Account
            </Userinputs>
          </div>
        </div>
        {/* <Status /> */}
      </div>
    </div>
  );
}

function Status() {
  return (
    <div className="status-bar">
      <div className="status">
        <span className="in">
          <span className="status-text">in</span>198989
        </span>
        <span className="out">
          <span className="status-text ">out</span>198989
        </span>
        <span className="in">
          <span className="status-text">interest</span>198989
        </span>
        <span>
          <buttton className="sort">Sort</buttton>
        </span>
      </div>
      <div className="timer">
        <p>
          <span>you will be logged out in </span>9:00
        </p>
      </div>
    </div>
  );
}

function CurrentBalance() {
  return (
    <div className="dateTime">
      <div>
        <p>CurrentBalance</p>
        <p className="date">05-02-2024</p>
      </div>
      <div>
        {/* <label>$</label> */}
        <input
          className="totalBalance"
          value={"$" + 9999999999999}
          disabled
        ></input>
        {/* <p className="totalBalance">$999999999999999999999999999999999</p> */}
      </div>
    </div>
  );
}

function MovementList() {
  // accounts[0].movements.map((mv) => console.log(mv));
  return (
    <div className="movementList">
      {accounts[0].movements
        .map((mv, i) => <Movement amount={mv} key={i} index={i} />)
        .reverse()}
    </div>
  );
}

function Movement({ amount, index }) {
  // console.log(amount);
  return (
    <div className="movement">
      <div>
        <span className={amount > 0 ? "deposit" : "remove"}>
          {index + 1} Deposit
        </span>
        <span>05-02-24</span>
      </div>
      <div className="movementBalance">{amount}</div>
    </div>
  );
}

function Userinputs({ children, inputLabel1, inputLabel2, Color, twoInput }) {
  return (
    <div className={"actions " + Color}>
      <p>{children}</p>
      <div className="inputs">
        {twoInput ? <input></input> : ""}
        <input type="Number"></input>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      <div className="transerLabel">
        <span>{inputLabel1}</span>
        <span>{inputLabel2}</span>
      </div>
    </div>
  );
}
