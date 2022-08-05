import CardItem from "../CardItem";
import cx from "classnames";
import styles from "../../styles/Card.module.css";
import data from "../../data/data.json";

const Card = () => {
  return (
    <section className={cx(styles.card, "container")}>
      {data?.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </section>
  );
};

export default Card;
