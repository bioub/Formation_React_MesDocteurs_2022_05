import { useState } from "react";
import Clock from "./Clock";
import ClockHook from "./ClockHook";

function ClockWithControls() {
  const [show, setShow] = useState(true);
  const [delay, setDelay] = useState(1000);
  const [format, setFormat] = useState('HH:mm:ss');

  return (
    <div className="ClockWithControls">
      <div className="controls">
        <div>
          <button onClick={() => setShow(!show)}>On/off</button>
        </div>
        <div>
          Delay : <input value={delay} onChange={(e) => setDelay(+e.target.value)} />
        </div>
        <div>
          Format : <input value={format} onChange={(e) => setFormat(e.target.value)} />
        </div>
      </div>
      {show && <Clock delay={delay} format={format} />}
      {show && <ClockHook delay={delay} format={format} />}
    </div>
  );
}

export default ClockWithControls;
