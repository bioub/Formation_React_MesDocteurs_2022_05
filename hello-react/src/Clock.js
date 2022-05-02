function Clock() {
  const now = new Date();
  return (
    <div className="Clock">
      Il est{" "}
      {now.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
