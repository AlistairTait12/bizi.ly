import React from "react";
import { Formik, Form, useField } from "formik";
import { TextField, Button, Typography } from "@material-ui/core";
import * as yup from "yup";
import UserDataService from "../services/user.service";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonColor: {
    backgroundColor: "#FE6B8B",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    marginTop: 30,
  },
  inputField: {
    marginTop: 10,
  },
});

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

const validationSchema = yup.object({
  email: yup.string().email("not a valid email").required("required"),
  password: yup.string().required("required"),
});

const LoginForm = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3">Log in</Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          data.username = data.email;
          // console.log(data);
          UserDataService.login(data).then(props.handleLogin);
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
              <Button
                className={classes.buttonColor}
                variant="outlined"
                type="submit"
              >
                Log In
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
