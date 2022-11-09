import styles from '../styles/loader.module.css';

/**
 * @see https://codepen.io/graphilla/pen/rNvBMYY
 */
export default function Loader({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={['flex h-[128px] w-[160px]', className].join(' ')}>
      <div className={styles.isometric}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>
    </div>
  );
}
