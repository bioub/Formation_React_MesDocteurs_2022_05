import Counter from "../components/Counter";
import { increment } from '../store/actions';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { countSelector } from '../store/selectors';

function CounterContainer() {
  const count = useAppSelector(countSelector);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(increment());
  }

  return (
    <Counter count={count} onIncrement={handleClick} />
  );
}

export default CounterContainer;
