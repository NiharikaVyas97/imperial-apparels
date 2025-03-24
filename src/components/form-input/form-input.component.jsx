import { FormInputLabel, Input, Group } from "./form-input.style.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
export default FormInput;
