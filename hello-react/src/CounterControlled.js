function CounterControlled({ count, onIncrement }) {
  return (
    <button className="CounterControlled" onClick={() => onIncrement(count)}>
      {count}
    </button>
  );
}

export default CounterControlled;