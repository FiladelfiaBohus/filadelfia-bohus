import Markdown from "markdown-to-jsx";

import { TextFragment } from "@/types";

import s from "./text.module.css";

export const Text: React.FC<TextFragment> = ({ body, title }) => {
  if (!body) {
    return null;
  }

  return (
    <div className={s["text-block"]}>
      <h2>{title}</h2>
      <Markdown className={s["text-wrapper"]} options={{ forceBlock: true }}>
        {body}
      </Markdown>
    </div>
  );
};
