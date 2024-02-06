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
  let transactions = [1, -1];
  if (currentUser) {
    transactions = currentUser.movements;
  }
  let accountsCopy = accounts;
  function handleLogin(userId, password) {
    accountsCopy.forEach((acc) =>
      acc.userName === userId && acc.pin === password ? setCurrentUser(acc) : ""
    );
  }
  return (
    <div className="App">
      <Header currentUser={currentUser} handleLogin={handleLogin}>
        <Greetings currentUser={currentUser} />
        <Logo />
        <LoginInput handleLogin={handleLogin} />
      </Header>
      <Main opaccity={currentUser ? "login" : "logout"}>
        <CurrentBalance Transactions={transactions} />
        <Status Transactions={transactions} />
        <MainContent>
          <MovementList Transactions={transactions} />
          <UserInputs />
        </MainContent>
      </Main>
    </div>
  );
}

function Header({ handleLogin, children }) {
  return (
    <header>
      <nav className="navbar">{children}</nav>
    </header>
  );
}

function Greetings({ currentUser }) {
  return (
    <div className="greetings">
      <p>{currentUser ? " Good Day " + currentUser.userName : "Login"}</p>
    </div>
  );
}
function Logo() {
  return (
    <div className="logo">
      <img src="https://bankist.netlify.app/logo.png" alt="logo"></img>
    </div>
  );
}

function LoginInput({ handleLogin }) {
  const [userId, setUserId] = useState(null);
  const [password, setPassword] = useState(null);
  return (
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
  );
}
function Main({ opaccity, children }) {
  return (
    <div className="main-wrapper" id={opaccity}>
      <div className="main">{children}</div>
    </div>
  );
}

function CurrentBalance({ Transactions }) {
  const totalBalance = Transactions.reduce((accu, ele) => accu + ele);
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return (
    <div className="dateTime">
      <div>
        <p>CurrentBalance</p>
        <p className="date">
          {day}-{month + 1}-{year}
        </p>
      </div>
      <div>
        <input
          className="totalBalance"
          value={"$" + totalBalance}
          disabled
        ></input>
      </div>
    </div>
  );
}

function Status({ Transactions }) {
  const transactionIn = Transactions.filter((trans) => trans > 0).reduce(
    (accu, ele) => accu + ele
  );
  const transactionOut = Transactions.filter((trans) => trans < 0).reduce(
    (accu, ele) => accu + ele
  );
  return (
    <div className="status-bar">
      <div className="status">
        <span className="in">
          <span className="status-text">in</span>${transactionIn}
        </span>
        <span className="out">
          <span className="status-text ">out</span>-${-transactionOut}
        </span>
        <span className="in">
          <span className="status-text">interest</span>198989
        </span>
        <span>
          <p className="sort">Sort</p>
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

function MainContent({ children }) {
  return <div className="main-content">{children}</div>;
}

function UserInputs() {
  return (
    <div className="Userinputs">
      <Userinput
        inputLabel1={"Transfer to"}
        inputLabel2={"Amount"}
        Color={"yellow"}
        twoInput={true}
      >
        Transfer Money
      </Userinput>
      <Userinput inputLabel1={"Amount"} Color={"green"} twoInput={false}>
        Request Loan
      </Userinput>
      <Userinput
        inputLabel1={"Confirm user"}
        inputLabel2={"Confirm pin"}
        Color={"red"}
        twoInput={true}
      >
        Close Account
      </Userinput>
    </div>
  );
}
function MovementList({ Transactions }) {
  return (
    <div className="movementList">
      {Transactions.map((mv, i) => (
        <Movement amount={mv} key={i} index={i} />
      )).reverse()}
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

function Userinput({ children, inputLabel1, inputLabel2, Color, twoInput }) {
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
