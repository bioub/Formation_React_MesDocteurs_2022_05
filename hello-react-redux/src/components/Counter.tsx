import { increment } from '../store/actions';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { countSelector } from '../store/selectors';

function Counter() {
  const count = useAppSelector(countSelector);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(increment());
  }

  return <button className="Counter" onClick={handleClick}>{count}</button>;
}


export default Counter;

