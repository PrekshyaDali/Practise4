import React, { useState , useEffect} from "react";
import '../components/Login/Login'
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsloggedIn(true);
    }
  }, []);


  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsloggedIn(true);
  };


  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsloggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
