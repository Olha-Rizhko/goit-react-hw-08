import css from "./Error.module.css";

export default function Error({ errorMessage }) {
  return <p className={css.error}>{errorMessage}</p>;
}
