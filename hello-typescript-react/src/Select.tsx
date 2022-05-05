import styles from './Select.module.scss';
import { Component, createRef, MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react';

type Props = {
  options: string[];
  value: string;
  onSelect(value: string): void;
};

type State = {
  open: boolean;
};

// class Select extends Component<Props, State> {
//   state: State = {
//     open: false,
//   };
//   hostRef = createRef<HTMLDivElement>();
//   handleHostClick = (event: ReactMouseEvent) => {
//     const { open } = this.state;
//     this.setState({
//       open: !open,
//     });
//   };
//   handleDocumentClick = (event: MouseEvent) => {
//     if (this.hostRef.current?.contains(event.target as HTMLElement)) {
//       return;
//     }

//     this.setState({
//       open: false,
//     });
//   };
//   handleOptionClick = (option: string) => {
//     const { onSelect } = this.props;
//     onSelect(option);
//   };
//   componentDidMount() {
//     document.addEventListener('click', this.handleDocumentClick, { capture: true });
//   }
//   componentWillUnmount() {
//     document.removeEventListener('click', this.handleDocumentClick, { capture: true });
//   }
//   render() {
//     const { options, value } = this.props;
//     const { open } = this.state;

//     if (!options?.length) {
//       throw new Error('no options in Select');
//     }

//     return (
//       <div ref={this.hostRef} className={styles.host} onClick={this.handleHostClick}>
//         <div className={styles.value}>{value}</div>
//         {open && (
//           <div className={styles.menu}>
//             {options.map((option) => (
//               <div className={styles.option} key={option} onClick={() => this.handleOptionClick(option)}>
//                 {option}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   }
// }

function Select({ options, value, onSelect }: Props) {
  const [open, setOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleDocumentClick(event: MouseEvent) {
      if (hostRef.current?.contains(event.target as HTMLElement)) {
        return;
      }

      setOpen(false);
    }
    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, []);

  return (
    <div ref={hostRef} className={styles.host} onClick={() => setOpen(!open)}>
      <div className={styles.value}>{value}</div>
      {open && (
        <div className={styles.menu}>
          {options.map((option) => (
            <div className={styles.option} key={option} onClick={() => onSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
