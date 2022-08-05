import cx from "classnames";
import styles from "../../styles/Banner.module.css";
import Image from "next/image";
import banner_img from "../../public/images/Rectangle4.png";
import author_img from "../../public/images/Ellipse1.png";

const Banner = () => {
  return (
    <section className={cx(styles.section_banner, "container")}>
      <Image src={banner_img} alt="banner-images" priority />
      <figure className={cx(styles.banner_content)}>
        <div className={cx(styles.banner_name)}>
          UI DESIGN <span className={styles.banner_date}>July 2, 2021</span>
        </div>
        <figcaption className={cx(styles.banner_title, "title")}>
          Understanding color theory: the color wheel and finding complementary
          colors
        </figcaption>
        <figcaption className={cx(styles.banner_desc, "desc")}>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum.{" "}
        </figcaption>
        <div className={cx(styles.banner_author, "flex")}>
          <Image
            src={author_img}
            width={50}
            height={50}
            objectFit="cover"
            alt="banner-author"
          />
          <ul>
            <li>Leslie Alexander</li>
            <li className="desc">UI Designer</li>
          </ul>
        </div>
      </figure>
    </section>
  );
};

export default Banner;
