export function MovementList({ Transactions }) {
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
