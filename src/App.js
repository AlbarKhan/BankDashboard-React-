import { useState } from "react";
import Header from "./header";
import { Greetings } from "./header";
import { Logo } from "./header";
import { LoginInput } from "./header";
import { CurrentBalance } from "./CurrentBalance";
import { Status } from "./Status";
import { MovementList } from "./MovementList";
import { UserInputs } from "./UserInputs";
export const accounts = [
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
      }
      if (acc === currentUser) {
        console.log("ok");
        acc.movements.push(-amount);
        setCurrentUser({
          ...currentUser,
          movements: [...currentUser.movements],
        });
      } else {
        return;
      }
    });
    console.log(transactions);
  }

  function handleSort() {
    setCurrentUser({
      ...currentUser,
      movements: [...currentUser.movements].sort((a, b) => a - b),
    });
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
        <Status
          Transactions={transactions}
          totalBalance={totalBalance}
          onSort={handleSort}
        />
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

function Main({ opaccity, children }) {
  return (
    <div className="main-wrapper" id={opaccity}>
      <div className="main">{children}</div>
    </div>
  );
}

function MainContent({ children }) {
  return <div className="main-content">{children}</div>;
}
