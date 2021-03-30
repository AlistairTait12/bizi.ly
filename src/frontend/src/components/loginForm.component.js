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
  email: yup.string().email("not a valid email").required("required"),
  password: yup.string().required("required"),
});

const LoginForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          data.username = data.email;
          // console.log(data);
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
              <Button type="submit">Log In</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
