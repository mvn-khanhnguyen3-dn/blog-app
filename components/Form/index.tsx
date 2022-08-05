import cx from "classnames";
import styles from "../../styles/Form.module.css";
import CardItem from "../CardItem";
import { useForm } from "react-hook-form";

type Props = {
  topic?: string;
  onSubmit?: any;
  name?: string;
  date?: string;
  title?: string;
  description?: string;
  author?: string;
  position?: string;
  imageCard?: any;
  imageAuthor?: any;
  handleUpload?: any;
  handleUploadAuthor?: any;
};

export default function Form(props: Props) {
  const { register, handleSubmit, watch, reset } = useForm<Props>();

  return (
    <section className={cx(styles.section_form, "container")}>
      <h2 className={cx(styles.topic)}>{props?.topic}</h2>
      <form
        onSubmit={handleSubmit(props?.onSubmit)}
        className={cx(styles.form)}
      >
        <div className={cx(styles.form_row)}>
          <input type="file" onChange={props?.handleUpload} />
          <input type="file" onChange={props?.handleUploadAuthor} />
        </div>
        <div className={cx(styles.form_row)}>
          <div className={cx(styles.form_col)}>
            <label htmlFor="name">Name</label>
            <input
              required
              defaultValue={props?.name}
              className={cx(styles.form_control, styles.form_name)}
              {...register("name")}
            />
          </div>
          <div className={cx(styles.form_col)}>
            <label htmlFor="date">Date</label>
            <input
              required
              defaultValue={props?.date}
              className={cx(styles.form_control, styles.form_date)}
              {...register("date")}
            />
          </div>
        </div>
        <div className={cx(styles.form_row)}>
          <div className={cx(styles.form_col)}>
            <label htmlFor="title">Title</label>
            <input
              required
              defaultValue={props?.title}
              className={cx(styles.form_control)}
              {...register("title")}
            />
          </div>
          <div className={cx(styles.form_col)}>
            <label htmlFor="author">Author</label>
            <input
              required
              defaultValue={props?.author}
              className={cx(styles.form_control)}
              {...register("author")}
            />
          </div>
          <div className={cx(styles.form_col)}>
            <label htmlFor="position">Position</label>
            <input
              required
              defaultValue={props?.position}
              className={cx(styles.form_control)}
              {...register("position")}
            />
          </div>
        </div>
        <div className={cx(styles.form_col)}>
          <label htmlFor="description">Description</label>
          <textarea
            required
            rows={4}
            cols={50}
            defaultValue={props?.description}
            className={cx(styles.form_control, styles.form_text_area)}
            {...register("description", { required: true })}
          />
        </div>

        <div className={cx(styles.btn_group)}>
          <input
            className={cx(styles.btn_submit, "btn")}
            type="submit"
            value="Save"
          />
          <button
            className={cx(styles.btn_reset, "btn")}
            onClick={() => reset()}
          >
            {props.topic === "Edit Blog" ? "Exit" : "Reset"}
          </button>
        </div>
      </form>
      <CardItem
        title={watch("title") || props?.title}
        description={watch("description") || props?.description}
        name={watch("name") || props?.name}
        date={watch("date") || props?.date}
        author={watch("author") || props?.author}
        position={watch("position") || props?.position}
        imageAuthor={props?.imageAuthor}
        imageCard={props?.imageCard}
      />
    </section>
  );
}
