import styles from './Select.module.scss';
import { useEffect, useRef, useState } from 'react';

type Props = {
  options: string[];
  value: string;
  onSelect(value: string): void;
};

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
