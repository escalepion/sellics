import cn from 'classnames';

import styles from './button.module.scss';

const Button = ({ type, text, onClick }) => <button className={cn(styles.button, type === 'dark' && styles.dark)} onClick={onClick}>{text}</button>
export default Button;
