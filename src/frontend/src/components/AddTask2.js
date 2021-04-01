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
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

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

const MyDateField = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  const classes = useStyles();

  return (
    <TextField
      name="day"
      label="due date"
      type="date"
      defaultValue="2017-05-24"
      className={classes.inputField}
      {...field}
      helperText={errorText}
      error={!!errorText}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

//yup validation schema
// const validationSchema = yup.object({
//   name: yup.string().required("Please add a task before submitting"),
// });

//form component
const AddTask = ({ onAdd }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [day, setDay] = useState("");

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          text: "",
          day: "",
        }}
        // validationSchema={validationSchema}
        onSubmit={(data) => {
          console.log(data);
          const id = UserDataService.getCurrentUser();
          console.log(data.day);
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
                placeholder="Title"
                name="name"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            <div></div>
            <div>
              <MyTextField
                placeholder="Description"
                name="text"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            {/*Change to date picker*/}
            <div>
              <MyDateField
                label="due date"
                type="date"
                name="day"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                as={TextField}
              />
              {/* <MyTextField
                placeholder="Day"
                name="day"
                type="input"
                as={TextField}
              ></MyTextField> */}
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
