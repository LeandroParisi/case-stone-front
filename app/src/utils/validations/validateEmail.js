const validateEmail = {
  errorMessage: 'Invalid email, it should not begin with a number',
  isValid: (email) => {
    const passwordRegex = /^[a-z][a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]{0,2})?$/;
    return passwordRegex.test(email.toLowerCase());
  },
};

export default validateEmail;
