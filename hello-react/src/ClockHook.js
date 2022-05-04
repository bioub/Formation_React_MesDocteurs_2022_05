import { useEffect, useState, useRef } from 'react';

// class ClockHook extends Component {
//   state = {
//     componentName: 'ClockHook',
//     now: new Date(),
//   };
//   componentDidMount() {
//     const { delay = 1000 } = this.props;
//     this.interval = setInterval(() => {
//       // do not mutate state directly
//       // this.state.now = new Date();

//       // use setState
//       // mal nommée, assignState
//       this.setState({
//         now: new Date(),
//       });
//     }, delay);
//   }
//   componentDidUpdate(prevProps) {
//     const { delay = 1000 } = this.props;
//     if (prevProps.delay !== delay) {
//       clearInterval(this.interval);
//       this.interval = setInterval(() => {
//         this.setState({
//           now: new Date(),
//         });
//       }, delay);
//     }
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }
//   render() {
//     const { now, componentName } = this.state;
//     const { format = 'HH:mm:ss' } = this.props;
//     return (
//       <div className="ClockHook">
//         Il est{" "}
//         {now.toLocaleTimeString()}
//         {" "}au format {format}, componentName : {componentName}
//       </div>
//     );
//   }
// }

function ClockHook({ format = 'HH:mm:ss', delay = 1000 }) {
  const [componentName, setComponentName] = useState('ClockHook');
  const [now, setNow] = useState(new Date());

  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate');
  //   return () => {
  //     console.log('componentWillUnmount + componentWillUpdate');
  //   };
  // });

  // useEffect(() => {
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   };
  // }, []);

  // useEffect(() => {
  //   console.log('componentDidMount + componentDidUpdate si delay change');
  //   return () => {
  //     console.log('componentWillUnmount + componentWillUpdate si delay change');
  //   };
  // }, [delay]);

  const hostRef = useRef();

  useEffect(() => {
    console.log(hostRef.current.className);
    
    const interval = setInterval(() => {
      setNow(new Date());
    }, delay);
    return () => {
      clearInterval(interval);
    };
  }, [delay]);

  return (
    <div className="ClockHook" ref={hostRef}>
      Il est {now.toLocaleTimeString()} au format {format}, componentName : {componentName}
    </div>
  );
}

export default ClockHook;
