import react, {createContext, useState} from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [isAuth, setIsAuth] = useState({isAuth: false, token: null});

  const UserLogin = (token) => {
    setIsAuth({isAuth: true, token: token});
  };

  const UserLogout = () => {
    setIsAuth({isAuth: false, token: null});
  };

  return (
    <AppContext.Provider value={{isAuth, UserLogin, UserLogout}}>
      {children}
    </AppContext.Provider>
  );
};
