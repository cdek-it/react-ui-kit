import styles from './Header.module.scss';
import {SelectButton} from "primereact/selectbutton";
import {useEffect, useRef, useState} from "react";

const options = [
  {label: 'Light', value: 'light'},
  {label: 'Dark', value: 'dark'},
];

export const Header = () => {
  const [theme, setTheme] = useState('light');
  const linkEl = useRef<HTMLLinkElement>();

  useEffect(() => {
    if (linkEl.current) {
      document.head.removeChild(linkEl.current);
    }

    const link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = theme === 'light' ? '../dist/themes/lara-light-green.css' : '../dist/themes/lara-dark-green.css';
    linkEl.current = link;
    document.head.appendChild(link);
  }, [theme]);

  return <header className={styles.header}>
    <SelectButton value={theme} options={options} onChange={(e) => {
      setTheme(e.value)
    }}/>
  </header>
}
