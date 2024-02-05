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
        <div className="main-content">
          <MovementList />
          <div>Inputs</div>
        </div>
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
  // console.log(accounts[0].movements.map());
  accounts[0].movements.map((mv) => console.log(mv));
  return (
    <div className="movementList">
      {accounts[0].movements.map((mv, i) => (
        <Movement amount={mv} key={i} />
      ))}
      {/* <Movement /> */}
    </div>
  );
}

function Movement({ amount }) {
  console.log(amount);
  return (
    <div className="movement">
      <div>
        <span className={amount > 0 ? "deposit" : "remove"}>8 Deposit</span>
        <span>05-02-24</span>
      </div>
      <div className="movementBalance">{amount}</div>
    </div>
  );
}
