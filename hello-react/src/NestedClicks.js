function NestedClicks() {
  return (
    <div className="NestedClicks">
      <div
        style={{ backgroundColor: 'yellow', width: '100px', height: '100px' }}
        onClickCapture={(event) => console.log('yellow click')}
      >
        <div
          style={{ backgroundColor: 'red', width: '50px', height: '50px' }}
          onClickCapture={() => console.log('red click')}
        ></div>
      </div>
    </div>
  );
}

export default NestedClicks;

// addEventListener('click', () => {}, { useCapture: true });