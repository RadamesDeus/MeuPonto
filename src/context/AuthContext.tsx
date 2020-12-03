import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import fetch_blob from 'react-native-fetch-blob';
import fs from 'fs';
import RNFS from 'react-native-fs';

import asyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface SignInProps {
  email: string;
  password: string;
}

// interface SignUpProps extends SignInProps {
//   name: string;
//   // email: string;
//   // password: string;
// }

interface User {
  avatar_url: string;
  name: string;
  email: string;
  password: string;
  Week: number;
  IdPessoa: number;
  IdPeriodo: number;
  IdPessoaCripto: string;
}

interface AuthState {
  user: User;
}

interface AuthContextData {
  user: User;
  CtxSignIn(data: SignInProps): Promise<void>;
  // SignUp(data: SignUpProps): Promise<void>;
  SignOut(): void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  // const { fs } = fetch_blob;
  const { dirs } = fetch_blob.fs;

  useEffect(() => {
    asyncStorage.getItem('meuponto:user').then(user => {
      if (user) {
        setData({ user: JSON.parse(user) });
      }
      setLoading(false);
    });
  }, []);

  const saveImage = useCallback(
    async (response: string) => {
      const file_path = `${dirs.DCIMDir}/kairosfoto.png`;
      const arquivoExist = await RNFS.exists(file_path);
      if (arquivoExist) await RNFS.unlink(file_path);

      const regexImage = /data:application\/octet-stream;base64,.+/;
      const foundImage = response.match(regexImage);
      //

      if (foundImage) {
        const image_data = foundImage[0].slice(37, -4);
        await RNFS.writeFile(file_path, image_data, 'base64').catch(error => {
          console.log(JSON.stringify(error));
        });
        const userAsyncStorage = await asyncStorage.getItem('meuponto:user');
        if (userAsyncStorage) {
          const user: User = JSON.parse(userAsyncStorage);
          user.avatar_url = file_path;
          await asyncStorage.setItem('meuponto:user', JSON.stringify(user));
          setData({ user });
        }
      }
    },
    [dirs.DCIMDir],
  );

  const CtxSignIn = useCallback(
    async ({ email, password }) => {
      console.log('CtxSignIn email', email);
      console.log('CtxSignIn password', password);
      const user = { email, password } as User;
      api
        .post(
          `Dimep/Account/LogOn?LogOnModel.Password=${password}&LogOnModel.UserName=${email}`,
        )
        .then(response => {
          const regex = /(?:UrlProfile = '\/Dimep\/Pessoas\/UserProfilePessoas\/)\d+/;
          const foundBody = response.data.match(regex);
          const strfind = foundBody[0].slice(
            foundBody[0].lastIndexOf('/') + 1,
          ) as number;

          if (strfind) {
            api
              .get(`Dimep/Ponto/UserProfilePonto/${strfind}`)
              .then(async response2 => {
                const regexWeek = /(?:Week:\s)\W*\w+/;
                const regexIdPeriodo = /(?:IdPeriodo:\s)\W*\w+/;
                const regexIdPessoaCripto = /(?:IdPessoaCripto:\s).+/;
                const matchWeek = response2.data
                  .match(regexWeek)[0]
                  .replace(/ /g, '')
                  .split(':');
                const matchIdPeriodo = response2.data
                  .match(regexIdPeriodo)[0]
                  .replace(/ /g, '')
                  .split(':');
                const matchIdPessoaCripto = response2.data
                  .match(regexIdPessoaCripto)[0]
                  .replace(/ /g, '')
                  .split(':');
                const Week = matchWeek[1] as number;
                const IdPeriodo = matchIdPeriodo[1] as number;
                const IdPessoaCripto = matchIdPessoaCripto[1] as string;

                user.Week = Week;
                user.IdPessoa = strfind;
                user.IdPeriodo = IdPeriodo;
                user.IdPessoaCripto = IdPessoaCripto.replace(/'/g, '');
                asyncStorage.setItem('meuponto:user', JSON.stringify(user));
                setData({ user });
                saveImage(response2.data);
              });
          }
        });
    },
    [saveImage],
  );

  const SignOut = useCallback(async () => {
    asyncStorage.multiRemove(['meuponto:user']);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user: data.user, CtxSignIn, SignOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Utilizar useAuth com AuthProvider');
  return context;
}
export { useAuth, AuthProvider };
