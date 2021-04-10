const validatePassword = {
  errorMessage: 'Password must containt minimun eight characters, at least one letter and one number',
  isValid: (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  },
};

export default validatePassword;
