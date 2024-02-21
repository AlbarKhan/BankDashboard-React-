export function CurrentBalance({ totalBalance }) {
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
