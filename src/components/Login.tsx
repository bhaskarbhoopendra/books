// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Users } from "../interfaces/user.interface";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const validateForm = (values: Users) => {
    const errors = {} as any;
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  return (
    <div>
      <h1>Any place in your app!</h1>
      <Formik
        initialValues={initialValues}
        validate={validateForm}
        onSubmit={(values, { setSubmitting }) => {
          console.log({ values });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
