import Counter from "../components/Counter";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { countSelector, nameSelector } from "../store/selectors";
import { increment, setName } from "../store/actions";
import MultiStateButton from "../components/MultiStateButton";
import Select from "../components/Select";
import Hello from "../components/Hello";

function HomePage() {
  const count = useAppSelector(countSelector);
  const name = useAppSelector(nameSelector);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(increment());
  }

  function handleSelect(value: string) {
    dispatch(setName(value));
  }

  const names = ['Toto', 'Titi', 'Tata'];

  return (
    <div className="HomePage">
      <Counter count={count} onIncrement={handleClick} />
      <Counter count={count} onIncrement={handleClick} />
      <Counter count={count} onIncrement={handleClick} />
      <Hello name={name} />
      <MultiStateButton items={names} value={name} onSelect={handleSelect} />
      <Select options={names} value={name} onSelect={handleSelect} />
    </div>
  );
}

export default HomePage;
