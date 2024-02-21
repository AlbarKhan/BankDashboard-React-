import { accounts } from "./App";
import { Userinput } from "./UserInput";
export function UserInputs({
  children,
  currentUser,
  setCurrentUser,
  onTransfer,
}) {
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
