type Props = {
  count: number;
  onIncrement(v: number): void;
};

function Counter({ count, onIncrement }: Props) {
  return (
    <button className="Counter" onClick={() => onIncrement(count)}>
      {count}
    </button>
  );
}

export default Counter;
