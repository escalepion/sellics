import styles from './mainTitle.module.scss';

const mainTitle = ({ text = '' }) => <div className={styles.mainTitle}>{text}</div>

export default mainTitle;
