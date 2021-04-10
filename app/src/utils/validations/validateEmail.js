const validateEmail = {
  errorMessage: 'Invalid email',
  isValid: (email) => {
    const passwordRegex = /^[a-z0-9._]+@[a-z0-9]+\.[a-z]+(\.[a-z]{0,2})?$/;
    return passwordRegex.test(email);
  },
};

export default validateEmail;
