type Props = {
  items: string[];
  value: string;
  onSelect(v: string): void;
};

function MultiStateButton({ items, value, onSelect }: Props) {
  const handleClick = () => {
    const index = items.indexOf(value);
    onSelect(items[(index + 1) % items.length]);
  };

  return (
    <button className="MultiStateButton" onClick={handleClick}>
      {value}
    </button>
  );
}

export default MultiStateButton;
