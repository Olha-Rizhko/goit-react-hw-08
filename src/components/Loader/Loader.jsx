import { PulseLoader } from "react-spinners";

import css from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <PulseLoader size={10} className={css.loader} />
    </>
  );
}
