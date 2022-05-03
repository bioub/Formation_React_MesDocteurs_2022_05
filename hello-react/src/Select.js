import styles from './Select.module.scss';
import { Component, createRef } from 'react';


class Select extends Component {
  state = {
    open: false,
    value: this.props.options[0]
  };
  hostRef = createRef(null);
  handleHostClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }
  handleDocumentClick = (event) => {
    if (this.hostRef.current.contains(event.target)) {
      return;
    }
    
    this.setState({
      open: false,
    });
  };
  handleOptionClick = (option) => {
    this.setState({
      value: option
    })
  }
  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, { capture: true });
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, { capture: true });
  }
  render() {
    const { options } = this.props;
    const { value, open } = this.state;

    if (!options?.length) {
      throw new Error('no options in Select');
    }

    // let menuEl;

    // if (open) {
    //   menuEl = <div>Menu avec les options</div>;
    // } else {
    //   menuEl = <div>Menu fermé</div>
    // }

    // return (
    //   <div className="Select">
    //     <div>Valeur sélectionnée</div>
    //     {menuEl}
    //   </div>
    // );

    // const array = [];

    // for (const option of options) {
    //   array.push(<div key={option.value}>{option.label}</div>);
    // }

    //const array = options.map((option) => <div key={option.value}>{option.label}</div>)

    return (
      <div ref={this.hostRef} className={styles.host} onClick={this.handleHostClick}>
        <div className={styles.value}>{value.label}</div>
        {open && (
          <div className={styles.menu}>
            {options.map((option) => (
              <div className={styles.option} key={option.value} onClick={() => this.handleOptionClick(option)}>{option.label}</div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Select;
