// function Clock() {
//   const now = new Date();
//   return (
//     <div className="Clock">
//       Il est{" "}
//       {now.toLocaleTimeString()}
//     </div>
//   );
// }

// export default Clock;

import { Component } from 'react';

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       componentName: 'clock',
//       now: new Date(),
//     };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       // do not mutate state directly
//       // this.state.now = new Date();

//       // use setState
//       // mal nommée, assignState
//       this.setState({
//         now: new Date(),
//       });
//     }, 1000);
//   }
//   render() {
//     const { now, componentName } = this.state;
//     const { format = 'HH:mm:ss',  } = this.props;
//     return (
//       <div className="Clock">
//         Il est{" "}
//         {now.toLocaleTimeString()}
//         {" "}au format {format}, componentName : {componentName}
//       </div>
//     );
//   }
// }

class Clock extends Component {
  state = {
    componentName: 'clock',
    now: new Date(),
  };
  componentDidMount() {
    const { delay = 1000 } = this.props;
    this.interval = setInterval(() => {
      // do not mutate state directly
      // this.state.now = new Date();

      // use setState
      // mal nommée, assignState
      this.setState({
        now: new Date(),
      });
    }, delay);
  }
  componentDidUpdate(prevProps) {
    const { delay = 1000 } = this.props;
    if (prevProps.delay !== delay) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.setState({
          now: new Date(),
        });
      }, delay);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    const { now, componentName } = this.state;
    const { format = 'HH:mm:ss' } = this.props;
    return (
      <div className="Clock">
        Il est{" "}
        {now.toLocaleTimeString()}
        {" "}au format {format}, componentName : {componentName}
      </div>
    );
  }
}

export default Clock;