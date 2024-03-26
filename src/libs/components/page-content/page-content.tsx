import c from "./page-content.module.css";

interface IPageContentProps {
  children: React.ReactNode;
}

export const PageContent = ({ children }: IPageContentProps) => {
  return <main className={c["page-content"]}>{children}</main>;
};
