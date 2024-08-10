import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, action) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ ...values }));
    action.resetForm();
  };

  const addContactSchema = Yup.object().shape(
    {
      name: Yup.string()
        .min(3, "Too short!")
        .max(30, "Too long!")
        .required("Required")
        .trim(),
      number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
        .trim(),
    },
    { strict: true }
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form noValidate className={css.form}>
        <div className={css.wrapInput}>
          <label htmlFor={nameId} className={css.formLabel}>
            Name
          </label>
          <Field
            className={css.formInput}
            id={nameId}
            name="name"
            autoComplete="name"
          />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.wrapInput}>
          <label htmlFor={numberId} className={css.formLabel}>
            Number
          </label>
          <Field
            className={css.formInput}
            id={numberId}
            name="number"
            autoComplete="tel"
          />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.addButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
