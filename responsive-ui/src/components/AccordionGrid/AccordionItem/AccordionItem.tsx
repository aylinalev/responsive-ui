import { useState } from 'react';
import chevron from '../../../assets/chevron.svg';
import { AccordionItemProps } from '../../../utils/types';
import styles from './AccordionItem.module.css';
export default function AccordionItem({ header, content }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const chevronItemOnClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${styles.item} ${isOpen ? styles.open : ''}`}>
      <div className={styles.number}>01</div>
      <div className={styles.text}>{header}</div>
      <div>
        <img className={styles.icon} src={chevron} onClick={chevronItemOnClick}></img>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
        <ul>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque.</li>
          <li>Illo, aut quasi exercitationem doloribus error, quaerat possimus veritatis</li>
          <li>facere voluptate sit distinctio explicabo dolores beatae reprehenderit.</li>
        </ul>
      </div>
    </div>
  );
}
