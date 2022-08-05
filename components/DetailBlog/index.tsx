import React, { useState } from "react";
import cx from "classnames";
import styles from "../../styles/Detail.module.css";
import styleCard from "../../styles/Card.module.css";
import Image from "next/image";
import { FetchData } from "../../helper/FetchData";
import { useRouter } from "next/router";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Comment from "../Comment";

type typeData = {
  id: number;
  title: string;
  description: string;
  name: string;
  date: string;
  author: string;
  position: string;
  imageAuthor: HTMLImageElement | any;
  imageCard: HTMLImageElement | any;
};

const DetailBlog = (props: typeData) => {
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

  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState();
  let router = useRouter();

  const handleDelete = async (id: number) => {
    if (`${value}` === `${author}/remove`) {
      await FetchData.delete(`http://localhost:3000/api/blog/${id}`);
      setTimeout(() => {
        router.push("/");
      }, 1500);
    }
  };
  return (
    <section className={cx(styles.section_detail, "container")}>
      <div className={cx(styles.detail_name)}>
        {name} <span className={cx(styles.detail_date)}>{date}</span>
      </div>
      <h2 className={cx(styles.detail_title)}>{title}</h2>
      <div className={cx(styleCard.card_author, "flex")}>
        <Image src={imageAuthor} alt={author} width={50} height={50} />
        <ul>
          <li>{author}</li>
          <li className="desc">{position}</li>
        </ul>
      </div>
      <Image
        className={cx(styles.detail_imageCard)}
        src={imageCard}
        alt={name}
        width={1000}
        height={600}
      />
      <div className={cx(styles.detail_desc)}>{description}</div>
      <Comment imageAuthor={imageAuthor} author={author} position={position} />
      {isShow && (
        <div className={cx(styles.detail_alert, "flex")}>
          <AiOutlineCloseCircle
            className={cx(styles.detail_remove_icon)}
            onClick={() => setIsShow(false)}
          />
          <h3 className={cx(styles.detail_remove_title)}>
            Are you absolutely sure?
          </h3>
          <p>
            Please type{" "}
            <strong className={cx(styles.detail_remove)}>
              {author}/remove
            </strong>{" "}
            to confirm.
          </p>
          <input
            placeholder="Please write to comfirm..."
            className={cx(styles.detail_input)}
            type="text"
            name="remove"
            required
            onChange={(e: React.ChangeEvent<any>) => setValue(e.target.value)}
          />

          <button
            style={{
              opacity: value === `${author}/remove` ? "1" : ".5",
            }}
            onClick={() => handleDelete(id)}
            className={cx(styles.btn_remove, "btn")}
          >
            I understand the consequences, delete this repository
          </button>
        </div>
      )}
      <button
        onClick={() => setIsShow(true)}
        className={cx(styles.detail_btn, "btn")}
      >
        DELETE THIS BLOG
      </button>
    </section>
  );
};

export default DetailBlog;
