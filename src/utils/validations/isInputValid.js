const isInputValid = (toggleInput, validation) => (value) => toggleInput(validation(value));

export default isInputValid;
