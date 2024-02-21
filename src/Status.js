export function Status({ Transactions, totalBalance, onSort }) {
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
          <p
            className="sort"
            style={{ cursor: "pointer" }}
            onClick={() => onSort()}
          >
            Sort
          </p>
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
