function CounterControlled({ count = 0, onIncrement = () => {} }) {
  return (
    <button className="CounterControlled" onClick={() => onIncrement(count)}>
      {count}
    </button>
  );
}

export default CounterControlled;