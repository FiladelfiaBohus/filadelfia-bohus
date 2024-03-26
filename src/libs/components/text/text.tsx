import Markdown from "markdown-to-jsx";

import { TextFragment } from "@/types";

import s from "./text.module.css";

export const Text: React.FC<TextFragment> = ({ body, title }) => {
  if (!body && !title) {
    return null;
  }

  return (
    <div className={s["text-block"]}>
      {title && <h2>{title}</h2>}
      {body && (
        <Markdown
          className={s["text-wrapper"]}
          options={{
            forceBlock: true,
          }}
        >
          {body}
        </Markdown>
      )}
    </div>
  );
};
