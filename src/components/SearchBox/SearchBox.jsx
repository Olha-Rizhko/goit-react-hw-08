import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";

import { useId } from "react";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const id = useId();

  const value = useSelector(selectNameFilter);

  return (
    <div className={css.container}>
      <label htmlFor={id} className={css.label}>
        Find contacts by name
      </label>

      <input
        className={css.input}
        id={id}
        type="text"
        value={value}
        onChange={(evt) => {
          dispatch(changeFilter(evt.target.value));
        }}
      />
    </div>
  );
}
