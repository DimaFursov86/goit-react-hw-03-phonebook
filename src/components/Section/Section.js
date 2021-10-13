import s from "../Section/Section.module.scss";
export default function Section({ children }) {
  return <div className={s.section}>{children}</div>;
}
