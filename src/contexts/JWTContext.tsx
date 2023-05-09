import React, { createContext, useEffect, useReducer } from 'react';

// third-party
import { Chance } from 'chance';
import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';
import { JWT_API } from 'config';
import { JWTData } from 'types/auth';
// constant
const JWT_SECRET = JWT_API.secret;
const JWT_EXPIRES_TIME = JWT_API.timeout;
// reducer - state management
import { LOGIN, LOGOUT } from 'store/actions';
import accountReducer from 'store/accountReducer';

// project imports
import Loader from 'ui-component/Loader';
import axios from 'utils/axios';
import { InitialLoginContextProps, KeyedObject } from 'types';
import { JWTContextType } from 'types/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphQl/mutation'
import { updateToken, updateUser } from 'store/slices/account';
import { useDispatch } from 'react-redux';
import router from 'next/router';


const chance = new Chance();
let users = [
  {
    id: '5e86809283e28b96d2d38537',
    email: 'info@codedthemes.com',
    password: '123456',
    name: 'JWT User'
  }
];
// constant
const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const verifyToken: (st: string) => boolean = (serviceToken) => {
  if (!serviceToken) {
    return false;
  }
  const decoded: KeyedObject = jwtDecode(serviceToken);
  /**
   * Property 'exp' does not exist on type '<T = unknown>(token: string, options?: JwtDecodeOptions | undefined) => T'.
   */
  return decoded.exp > Date.now() / 1000;
};


const setSession = (serviceToken?: string | null) => {
  if (serviceToken) {
    localStorage.setItem('serviceToken', serviceToken);
    localStorage.setItem('accessToken', serviceToken);

    axios.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
  } else {
    localStorage.removeItem('serviceToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

// ==============================|| JWT CONTEXT & PROVIDER ||============================== //
const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const dispatchs = useDispatch()

  const [loginUser] = useMutation(LOGIN_USER)
  const { v4: uuidv4 } = require('uuid');



  useEffect(() => {
    const init = async () => {
      try {
        const serviceToken = window.localStorage.getItem('serviceToken');
        if (serviceToken && verifyToken(serviceToken)) {
          setSession(serviceToken);
          if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
            const localUsers = window.localStorage.getItem('users');
            users = JSON.parse(localUsers!);
          }

          // const jwData = jwt.verify(serviceToken, JWT_SECRET);
          // const { userId } = jwData as JWTData;
          // const user = users.find((_user) => _user.id === userId);

          // if (!user) {
          //   return;
          // }

          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              // user: {
              //   email: user.email,
              //   id: user.id,
              //   name: user.name
              // }
            }
          });
        } else {
          dispatch({
            type: LOGOUT
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT
        });
      }
    };

    init();
  }, []);

  const login = async (email: string, password: string) => {
  
     console.log(email)
    const response = await loginUser({
      variables: { email: email, password: password },
    })
    const login = response?.data?.login.success
    // console.log(login)
    console.log(response?.data?.login.token)
    if(login){
      await dispatchs(updateToken(response?.data?.login.token))
      dispatchs(updateUser({ email: email }))
      // const serviceToken = jwt.sign({ userId: uuidv4(),}, JWT_SECRET, { expiresIn: JWT_EXPIRES_TIME });
      setSession(response?.data?.login.token);
      const user = {
      id: uuidv4(),
      email: "azadam8255@gmail.com",
      name: "adam"
    };
      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: true,
          user
        }
      });
      router.push('/dashboard/default');
    }
    else {
      dispatch({
        type: LOGOUT
      });
    }
   
  };

  const register = async (email: string, password: string, firstName: string, lastName: string) => {
    // todo: this flow need to be recode as it not verified
    const id = chance.bb_pin();
    const response = await axios.post('/api/account/register', {
      id,
      email,
      password,
      firstName,
      lastName
    });
    users = response.data;

    if (window.localStorage.getItem('users') !== undefined && window.localStorage.getItem('users') !== null) {
      const localUsers = window.localStorage.getItem('users');
      users = [
        ...JSON.parse(localUsers!),
        {
          id,
          email,
          password,
          name: `${firstName} ${lastName}`
        }
      ];
    }

    window.localStorage.setItem('users', JSON.stringify(users));
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
  };

  const resetPassword = (email: string) => console.log(email);

  const updateProfile = () => {};

  if (state.isInitialized !== undefined && !state.isInitialized) {
    return <Loader />;
  }

  return <JWTContext.Provider value={{ ...state, login, logout, register, resetPassword, updateProfile }}>{children}</JWTContext.Provider>;
};

export default JWTContext;
