import React, { useState } from "react";
import cx from "classnames";
import styles from "../../styles/Comment.module.css";
import styleCard from "../../styles/Card.module.css";
import Image from "next/image";
import { Editor, EditorTools, EditorUtils } from "@progress/kendo-react-editor";

type Props = {
  imageAuthor?: any;
  author: string;
  position: string;
};

const Comment = (props: Props) => {
  const {
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignRight,
    AlignCenter,
    Undo,
    Redo,
  } = EditorTools;

  const [value, setValue] = useState<any>();

  const editor = React.createRef<Editor>();

  const getHtml = () => {
    if (editor.current) {
      const view = editor.current.view;
      if (view) {
        setValue(EditorUtils.getHtml(view.state));
      }
    }
  };

  return (
    <section className={cx(styles.section_comment)}>
      <div className={cx(styleCard.card_author, "flex", styles.comment_card)}>
        <Image
          src={props?.imageAuthor}
          alt={props?.author}
          width={50}
          height={50}
        />
        <ul>
          <li>{props?.author}</li>
          <li className={cx(styles.comment_desc, "desc")}>{props?.position}</li>
        </ul>
        <div
          className={cx(styles.text_comment)}
          dangerouslySetInnerHTML={{ __html: value }}
        ></div>
      </div>

      <h2 className={cx(styles.comment_title)}>Comments</h2>
      <Editor
        key={1}
        className={cx(styles.comment_editor)}
        tools={[
          [Bold, Italic, Underline],
          [Undo, Redo],
          [AlignLeft, AlignCenter, AlignRight],
        ]}
        contentStyle={{ height: 50 }}
        defaultContent={""}
        ref={editor}
      />
      <button className={cx(styles.btn_comment, "btn")} onClick={getHtml}>
        Send
      </button>
    </section>
  );
};

export default Comment;
