import reactLogo from '../../assets/react.svg';
import styles from './Accordion.module.css';

export default function Accordion() {
  return (
    <div className={styles.accordion}>
      <div className={styles.header}>
        <div className={styles.number}>01</div>
        <div className={styles.text}>Learn modern HTML5 andCSS3</div>
        <img className={styles.icon} src={reactLogo}></img>
      </div>
      <div className={styles.content}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quos ad dicta dolorum
          facere. Eius, consectetur officiis atque quasi quisquam odit dolorum, illo reprehenderit
          neque corrupti quae nisi nihil unde!
        </p>
        <ul>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Eaque.</li>
          <li>Illo, aut quasi exercitationem doloribus error, quaerat possimus veritatis</li>
          <li>facere voluptate sit distinctio explicabo dolores beatae reprehenderit.</li>
        </ul>
      </div>
    </div>
  );
}
