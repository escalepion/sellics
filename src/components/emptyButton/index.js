import styles from './emptyButton.module.scss';

const EmptyButton = ({ onButtonClick }) => (
  <div className={styles.emptyButton} onClick={onButtonClick}>
    <span className={styles.plusIcon}>+</span>
  </div>
) 

export default EmptyButton;
