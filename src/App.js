const accounts = [
  {
    userName: "Albar",
    pin: "222",
    movements: [200, 100, -23, 21, 2, -34, 56, 23],
    id: 0,
  },
  {
    userName: "Khan",
    pin: "111",
    movements: [200, -100, 23, 21, 2, 34, -56, 23],
    id: 1,
  },
];
export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="greetings">
          <p>Goody Day Albar Khan</p>
        </div>
        <div className="logo">
          <img src="https://bankist.netlify.app/logo.png" alt="logo"></img>
        </div>
        <div className="login">
          <input className="user" placeholder="user"></input>
          <input className="id" placeholder="id"></input>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </nav>
    </header>
  );
}

function Main() {
  return (
    <div className="main-wrapper">
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
          <buttton>Sort</buttton>
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
  accounts[0].movements.map((mv) => console.log(mv));
  return (
    <div className="movementList">
      {accounts[0].movements
        .map((mv, i) => <Movement amount={mv} key={i} index={i} />)
        .reverse()}
    </div>
  );
}

function Movement({ amount, index }) {
  console.log(amount);
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
