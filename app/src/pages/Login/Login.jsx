import React from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import useLoader from '../../hooks/useLoader';
// import { validateEmail, validatePassword, isInputValid } from '../../utils/validations';
import './Login.scss';
// import Input from '../../components/Input/Input';
// import Button from '../../components/Button/Button';
import postLogin from '../../services/postLogin';
import { saveToken } from '../../store/localStorage/actions';
import UserForm from '../../components/UserForm/UserForm';

function Login() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isDisabled, setIsDisabled] = useState(true);
  // const [isEmailValid, setIsEmailValid] = useState(null);
  // const [isPasswordValid, setIsPasswordValid] = useState(null);
  const history = useHistory();

  // useEffect(() => {
  //   setIsDisabled(!(validateEmail.isValid(email) && validatePassword.isValid(password)));
  // }, [email, password]);

  const handleButtonClick = async (email, password) => {
    const { token, message } = await postLogin({ email, password });
    if (!token) {
      return toast.error(message);
    }
    saveToken(token);
    return history.push('/search');
  };

  return (
    <>
      { useLoader('main1') }
      <UserForm onSubmit={handleButtonClick} />
    </>
  );
}

export default Login;
