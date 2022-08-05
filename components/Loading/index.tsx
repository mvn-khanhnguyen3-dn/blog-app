import cx from "classnames";
import styles from "../../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={cx(styles.loading_screen)}>
      <div className={cx(styles.loadding_balls)}>
        <div className={cx(styles.ball, styles.one)}></div>
        <div className={cx(styles.ball, styles.two)}></div>
        <div className={cx(styles.ball, styles.three)}></div>
      </div>
    </div>
  );
};

export default Loading;
