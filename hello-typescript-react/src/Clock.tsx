import { Component } from 'react';

type Props = {
  format?: string;
}

type State = {
  componentName: string;
  now: Date;
}

class Clock extends Component<Props, State> {
  state: State = {
    componentName: 'clock',
    now: new Date(),
  };
  componentDidMount() {
    setInterval(() => {
      this.setState({
        now: new Date(),
      });
    }, 1000);
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