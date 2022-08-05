import NavLink from "../../NavLink";
import styles from "../../../styles/Header.module.css";
import cx from "classnames";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <header className={cx(styles.header)}>
      <div className={cx(styles.container, "container")}>
        <div className={cx(styles.logo)}>
          <span className={cx(styles.logo_icon)}>E</span> Epictetus
        </div>
        <nav className={cx(styles.nav_menu)}>
          <NavLink
            href={"/create"}
            className={cx(styles.nav_menu_item)}
            name="Ui Design"
          />

          <NavLink
            href={"/"}
            className={cx(styles.nav_menu_item)}
            name="Front-end"
          />

          <NavLink
            href={"/"}
            className={cx(styles.nav_menu_item)}
            name="Back-end"
          />
          <NavLink
            href={"/"}
            name="Lainnya"
            className={cx(styles.nav_menu_item)}
          />
          <BsChevronDown className={cx(styles.icon_nav)} />
        </nav>
        <div className={cx(styles.search)}>
          <FiSearch className={cx(styles.icon_search)} />
          <input
            className={cx(styles.btn_search)}
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
