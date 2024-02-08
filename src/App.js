import { useState } from "react";

const accounts = [
  {
    userName: "a",
    pin: 111,
    movements: [200, 100, -23, 21, 2, -34, 56, 23],
    id: 0,
  },
  {
    userName: "khan",
    pin: 111,
    movements: [2000, -100, 23, 21, 2, 34, -56, 23],
    id: 1,
  },
  {
    userName: "sufiyan",
    pin: 333,
    movements: [400, -100, 23, 21, 2, 34, -56, 23],
    id: 1,
  },
];
export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  function handleLogin(userId, password) {
    // const user = accounts.map((acc) =>
    //   acc.userName === userId && acc.pin === password ? setCurrentUser(acc) : ""
    // );
    const user = accounts.find(
      (acc) => acc.userName === userId && acc.pin === password
    );

    if (user) {
      setCurrentUser(user);
    }
  }
  let transactions = [0, 0];

  if (currentUser) {
    transactions = currentUser.movements;
  }

  function handleTransferMoney(username, amount) {
    accounts.forEach((acc) => {
      if (username === acc.userName) {
        acc.movements.push(amount);
        setCurrentUser({
          ...currentUser,
          movements: [...currentUser.movements, -amount],
        });
      } else {
        return;
      }
    });
    console.log(transactions);
  }

  const totalBalance = transactions.reduce((accu, ele) => accu + ele);
  return (
    <div className="App">
      <Header currentUser={currentUser} handleLogin={handleLogin}>
        <Greetings currentUser={currentUser} />
        <Logo />
        <LoginInput handleLogin={handleLogin} />
      </Header>
      <Main opaccity={currentUser ? "login" : "logout"}>
        <CurrentBalance totalBalance={totalBalance} />
        <Status Transactions={transactions} totalBalance={totalBalance} />
        <MainContent>
          <MovementList Transactions={transactions} />
          <UserInputs
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            onTransfer={handleTransferMoney}
          />
        </MainContent>
      </Main>
    </div>
  );
}

function Header({ children }) {
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
        onChange={(e) => setPassword(Number(e.target.value))}
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

function CurrentBalance({ totalBalance }) {
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

function Status({ Transactions, totalBalance }) {
  const transactionIn = Transactions.filter((trans) => trans >= 0).reduce(
    (accu, ele) => accu + ele
  );
  const transactionOut = Transactions.filter((trans) => trans <= 0).reduce(
    (accu, ele) => accu + ele
  );

  const Interest = Math.trunc((7 / 100) * totalBalance);

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
          <span className="status-text">interest</span>
          {Interest}
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

function UserInputs({ children, currentUser, setCurrentUser, onTransfer }) {
  function handleLoan(userName, amount) {
    accounts.forEach((acc) => {
      if (acc.userName === currentUser.userName) {
        acc.movements.push(amount);
        setCurrentUser({
          ...currentUser,
          movements: acc.movements,
        });
      }
    });
  }

  function handleAccountsClosing(userName, pin) {
    let index;
    accounts.forEach((acc, i) => {
      if (
        acc.userName === currentUser.userName &&
        acc.pin === currentUser.pin &&
        acc.userName === userName &&
        acc.pin === pin
      ) {
        index = i;
        // transactions = [0, 0];
        accounts.splice(index, 1);
        setCurrentUser(null);
      }
    });
  }
  return (
    <div className="Userinputs">
      {" "}
      <Userinput
        inputLabel1={"Transfer to"}
        inputLabel2={"Amount"}
        Color={"yellow"}
        onClick={onTransfer}
      >
        Transfer Money
      </Userinput>
      <Userinput inputLabel1={"Amount"} Color={"green"} onClick={handleLoan}>
        Request Loan
      </Userinput>
      <Userinput
        inputLabel1={"Confirm user"}
        inputLabel2={"Confirm pin"}
        Color={"red"}
        onClick={handleAccountsClosing}
      >
        Close Account
      </Userinput>{" "}
    </div>
  );
}
function Userinput({ children, inputLabel1, inputLabel2, Color, onClick }) {
  const [username, setUserName] = useState("");
  const [amount, setAmount] = useState(null);

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
          {index + 1} {amount > 0 ? "Deposit" : "Withdraw"}
        </span>
        <span>05-02-24</span>
      </div>
      <div className="movementBalance">{amount}</div>
    </div>
  );
}
