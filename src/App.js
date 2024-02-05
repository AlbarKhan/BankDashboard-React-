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
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </nav>
    </header>
  );
}

function Main() {
  return <div className="main">main</div>;
}
