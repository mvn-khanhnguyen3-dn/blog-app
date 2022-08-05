import Image from "next/image";
import React from "react";
import cx from "classnames";
import styles from "../../styles/Card.module.css";
import { useRouter } from "next/router";

interface typeProps {
  id?: any;
  title?: string;
  description?: string;
  name?: string;
  date?: string;
  author?: string;
  position?: string;
  imageAuthor?: any;
  imageCard?: any;
}

const CardItem = (props: typeProps) => {
  const {
    id,
    title,
    description,
    name,
    date,
    author,
    position,
    imageAuthor,
    imageCard,
  } = props;
  let router = useRouter();

  return (
    <div className={cx(styles.card_item)}>
      {imageCard && (
        <Image
          className={cx(styles.card_img)}
          src={imageCard}
          alt={name}
          width={500}
          height={300}
          objectFit="cover"
          onClick={() => router.push(`http://localhost:3000/view/${id}`)}
        />
      )}
      <div className={cx(styles.card_name)}>
        {name}
        <span className={styles.card_date}>{date}</span>
      </div>
      <figure className={cx(styles.card_figure)}>
        <figcaption className={cx(styles.card_title, "title")}>
          {title}
        </figcaption>
        <figcaption className={cx(styles.card_desc, "desc")}>
          {description}
        </figcaption>
      </figure>
      <div className={cx(styles.card_author, "flex")}>
        {imageAuthor && (
          <Image src={imageAuthor} alt={author} width={50} height={50} />
        )}
        <ul>
          <li>{author}</li>
          <li className="desc">{position}</li>
        </ul>

        {id && (
          <button
            onClick={() => router.push(`http://localhost:3000/blog/${id}`)}
            className={cx(styles.card_detail_btn, "btn")}
          >
            Edit Blog
          </button>
        )}
      </div>
    </div>
  );
};

export default CardItem;
