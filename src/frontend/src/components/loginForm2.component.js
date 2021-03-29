import React from "react";
import { Formik, Form, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import UserDataService from "../services/user.service";

const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const MyPassword = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      type="password"
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

const validationSchema = yup.object({
  firstname: yup.string().required("required"),
  lastname: yup.string().required("required"),
  email: yup.string().email("not a valid email").required("required"),
  password: yup
    .string()
    .required("required")
    .min(10, "Password must be between 10-25 characters")
    .max(25, "Password must be between 10-25 characters"),
});

const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          UserDataService.login(data);
        }}
      >
        {({ values, errors }) => (
          <Form>
            <div>
              <MyTextField
                placeholder="email@domain.com"
                name="email"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            <div>
              <MyPassword
                placeholder="password"
                name="password"
                type="password"
                as={TextField}
              ></MyPassword>
            </div>
            <div>
              <Button type="submit">submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
