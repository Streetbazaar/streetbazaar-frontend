
import React from "react";
import { Input, Label } from "../Auth/AuthComponents-styles/Login.styled";

const ControlledInput = ({ label, formikProps, formikKey, onChangeText, ...rest }) => {
  const inputStyles = {};

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    inputStyles.borderColor = "red";
  }

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} label={label}>
      <Input
        onChange={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        style={inputStyles}
        {...rest}
        
      />
    </FieldWrapper>
  );
};
const FieldWrapper = ({ children, label, formikProps, formikKey }) => {


//   if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
//     labelStyles.color = Colors.ashShade;
//   }
  return (
    <div style={styles.inputContainer}>
      <Label style={{marginBottom: 10}}>{label}</Label>
      {children}
      <p style={styles.error}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </p>
    </div>
  );
};
const styles = {
  error: {
    marginBottom: 10,
    color: "red",
    fontSize: 12
  },
  input: {
    padding: 10,
    marginBottom: 3,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
};

export default ControlledInput;
