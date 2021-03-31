//imports
import React from "react";
import { Formik, Form, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
// import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import UserDataService from "../services/user.service";
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles({
    buttonColor: {
        backgroundColor: "#FE6B8B",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        color: "white",
        marginTop: 30
    },
    inputField: {
        marginTop: 10
    }
});
//custom hooks/ components
const MyTextField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
    const classes = useStyles();

  return (
    <TextField
      label={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      variant={"outlined"}
      className={classes.inputField}
    />
  );
};

const MyPassword = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
    const classes = useStyles();

  return (
    <TextField
      type="password"
      label={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      variant={"outlined"}
      className={classes.inputField}
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
    const classes = useStyles();

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

          UserDataService.signup(data);
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
              <Button className={classes.buttonColor} variant="outlined" type="submit">Sign Up</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
