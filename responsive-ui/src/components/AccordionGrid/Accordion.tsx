import { AccordionItemProps } from '../../utils/types';
import styles from './Accordion.module.css';
import AccordionItem from './AccordionItem/AccordionItem';

interface AccordionProps {
  list: AccordionItemProps[];
}

export default function Accordion({ list }: AccordionProps) {
  return (
    <div className={styles.accordion}>
      {list.map((item) => (
        <AccordionItem key={item.header} header={item.header} content={item.content} />
      ))}
    </div>
  );
}
