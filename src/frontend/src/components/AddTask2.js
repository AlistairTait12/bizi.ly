//imports
import React from "react";
import { Formik, Form, useField } from "formik";
import { TextField, Button } from "@material-ui/core";
// import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import UserDataService from "../services/user.service";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import TaskDataService from "../services/task.service";

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

//yup validation schema
const validationSchema = yup.object({
  text: yup.string().required("Please add a task before submitting"),
});

//form component
const AddTask = ({ onAdd }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  return (
    <div>
      <Formik
        initialValues={{
          text: "",
          day: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          console.log(data);
          const id = UserDataService.getCurrentUser();
          data.userid = id.id;
          console.log(data);
          onAdd(data);
          setText("");
          setDay("");
        }}
      >
        {({ values, errors }) => (
          <Form>
            <div>
              <MyTextField
                placeholder="Task"
                name="text"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            {/*Change to date picker*/}
            <div>
              <MyTextField
                placeholder="Day"
                name="day"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            <div>
              <Button
                className={classes.buttonColor}
                variant="outlined"
                type="submit"
              >
                Save Task
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddTask;
