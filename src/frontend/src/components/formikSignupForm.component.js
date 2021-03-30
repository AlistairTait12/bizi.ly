//imports
import React from "react";
import {
  Formik,
  Field,
  Form,
  useField,
  FieldAttributes,
  FieldArray,
} from "formik";
import {
  TextField,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import * as yup from "yup";

//custom hooks/ components
const MyRadio = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return <FormControlLabel {...field} control={<Checkbox />} label={label} />;
};

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

//yup validation schema
const validationSchema = yup.object({
  firstName: yup.string().required("required").max(10),
  userEmail: yup.string().email("not a valid email").required("required"),
  agree: yup.bool().oneOf([true], "You must read anc accept"),
});

//form component
const FormikSignup = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          userEmail: "",
          agree: false,
          cookies: [],
          yoghurt: "",
          // pets: [{ type: "cat", name: "jarvis", id: "" + Math.random() }],
        }}
        validationSchema={validationSchema}
        // validate={(values) => {
        //   const errors = {};

        //   if (values.firstName.includes("bob")) {
        //     errors.firstName = "no bobs please";
        //   }

        //   return errors;
        // }}
        onSubmit={(data) => {
          console.log("Submit: ", data);
        }}
      >
        {({ values, errors }) => (
          <Form>
            <div>
              <MyTextField
                placeholder="first name"
                name="firstName"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            <div>
              <MyTextField
                placeholder="last name"
                name="lastName"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            <div>
              <MyTextField
                placeholder="email@domain.com"
                name="userEmail"
                type="input"
                as={TextField}
              ></MyTextField>
            </div>
            <MyCheckbox
              name="agree"
              type="checkbox"
              label="I have read and agree"
              as={Checkbox}
            ></MyCheckbox>
            <div>
              {"COOKIES  "}
              <MyCheckbox
                name="cookies"
                type="checkbox"
                value="maryland"
                label="maryland"
                as={Checkbox}
              ></MyCheckbox>
              <MyCheckbox
                name="cookies"
                type="checkbox"
                value="cadbury"
                label="cadbury"
                as={Checkbox}
              ></MyCheckbox>
              <MyCheckbox
                name="cookies"
                type="checkbox"
                value="foxs"
                label="foxs"
                as={Checkbox}
              ></MyCheckbox>
            </div>
            <div>
              {"YOGHURT  "}
              <MyRadio
                name="yoghurt"
                type="radio"
                value="cherry"
                label="cherry"
              />
              <MyRadio
                name="yoghurt"
                type="radio"
                value="peach"
                label="peach"
              />
              <MyRadio
                name="yoghurt"
                type="radio"
                value="vanilla"
                label="vanilla"
              />
            </div>
            {/* <FieldArray name="pets">
              {(arrayHelpers) => (
                <div>
                  <Button
                    onClick={() =>
                      arrayHelpers.push({
                        type: "frog",
                        name: "",
                        id: "" + Math.random(),
                      })
                    }
                  >
                    add pet
                  </Button>
                  {values.pets.map((pet, index) => {
                    return (
                      <div key={pet.id}>
                        <MyTextField
                          placeholder="pet name"
                          name={`pets.${index}.name`}
                        />
                        <Field
                          name={`pets.${index}.type`}
                          type="select"
                          as={Select}
                        >
                          <MenuItem value="cat">cat</MenuItem>
                          <MenuItem value="dog">dog</MenuItem>
                          <MenuItem value="frog">frog</MenuItem>
                        </Field>
                        <Button onClick={() => arrayHelpers.remove(index)}>
                          remove
                        </Button>
                      </div>
                    );
                  })}
                </div>
              )}
            </FieldArray> */}
            <div>
              <Button type="submit">submit</Button>
            </div>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikSignup;
