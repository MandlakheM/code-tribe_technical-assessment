import { AUTH } from './actionTypes.js';
import * as api from '../api/index.js';
import { useNavigate } from 'react-router-dom';


export const signin = (formData) => async (dispatch) => {
    const navigate = useNavigate()

    try {
      const { data } = await api.signIn(formData);
      dispatch({ type: AUTH, data });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  
  export const signup = (formData) => async (dispatch) => {
    const navigate = useNavigate()

    try {
      const { data } = await api.signUp(formData);
      dispatch({ type: AUTH, data });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  