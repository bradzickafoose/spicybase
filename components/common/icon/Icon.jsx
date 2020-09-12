import classNames from 'classnames';
import styles from './Icon.module.css';

export default function Icon({ icon, className, size = 'medium' }) {
  return (
    <div
      className={classNames(styles.icon, className, {
        [styles.xlarge]: size === 'xlarge',
        [styles.large]: size === 'large',
        [styles.medium]: size === 'medium',
        [styles.small]: size === 'small',
        [styles.xsmall]: size === 'xsmall',
      })}
    >
      {icon}
    </div>
  );
}