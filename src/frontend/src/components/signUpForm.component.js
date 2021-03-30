//imports
import React from "react";
import { Formik, Form, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import UserDataService from "../services/user.service";

//custom hooks/ components
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

//yup validation schema
const validationSchema = yup.object({
  firstname: yup.string().required("required"),
  lastname: yup.string().required("required"),
  email: yup.string().email("not a valid email").required("required"),
  password: yup
    .string()
    .required("required")
    .min(10, "Password must be between 10-25 characters")
    .max(25, "Password must be between 10-25 characters"),
  confirmPassword: yup
    .string()
    .required("required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

//form component
const SignUpForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          firstname: "",
          lastname: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          data.username = data.email;
          data.role = ["user"];

          UserDataService.create(data);
        }}
      >
        {({ values, errors }) => (
          <Form>
            <div>
              <MyTextField
                placeholder="first name"
                name="firstname"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            <div>
              <MyTextField
                placeholder="last name"
                name="lastname"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
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
              <MyPassword
                placeholder="confirm password"
                name="confirmPassword"
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

export default SignUpForm;
