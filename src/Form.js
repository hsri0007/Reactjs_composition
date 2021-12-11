import React from "react";
import { Field, Form, Formik, useField } from "formik";
import * as yup from "yup";

const FormDesk = () => {
  const MyText = (props) => {
    const [field, meta] = useField(props);
    const erroeMessage = meta.error && meta.touched ? meta.error : "";
    return (
      <div>
        <input {...field} />
        {erroeMessage}
      </div>
    );
  };

  const validSChema = yup.object({
    firstName: yup.string().required().max(10),
    SecondName: yup.string().required().max(10),
  });

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          SecondName: "",
          checking: false,
          cookies: [],
        }}
        validationSchema={validSChema}
        onSubmit={(data) => {
          console.log(data);
        }}
      >
        {({ values }) => (
          <Form>
            <MyText type="input" name="firstName" as="input" />
            <MyText type="input" name="SecondName" as="input" />
            <Field type="checkbox" name="checking" />
            <div>cookies</div>
            <Field type="checkbox" value="buiscuit" name="cookies" />
            <Field type="checkbox" value="cookiesify" name="cookies" />
            <div>cookies</div>
            <Field type="radio" value="buiscuit" name="gender" />
            <Field type="radio" value="cookiesify" name="gender" />

            <input type="submit" />
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormDesk;
