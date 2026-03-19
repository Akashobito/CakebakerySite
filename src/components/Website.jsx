import React, { useEffect, useRef, useState } from "react";
import "@fontsource/lobster";
import "@fontsource-variable/caveat";
import "@fontsource-variable/oswald";
import "@fontsource-variable/roboto";

import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Blog from "./Blog";
import Contact from "./Contact";
import Navbar from "./Navbar";
import LoginCard from "./LoginCard";
import LoadingPage from "./LoadingPage";
import LoginSuccessfull from "./LoginSuccessfull";
import SignUpForm from "./SignUpForm";
import UserDetails from "./UserDetails";
import LogoutAlert from "./LogoutAlert";
import LogoutSuccessfull from "./LogoutSuccessfull";

function Website() {
  const [islogin, setIsLogin] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [isLoginSuccess, setIsLoginSucess] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAccCreated, setIsAccCreated] = useState(false);
  const [showUserAccount,setShowUserAccount] = useState(false);
  const [isLogoutAlert, setIsLogoutAlert] = useState(false);
  const [isLogoutSuccess, setIsLogoutSucess] = useState(false);

  const interval = useRef('');
  
  /*  useEffect(() => {
    console.log(menuProduct);
  }, [menuProduct]); */

  useEffect(()=>{
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if(userInfo?.fullName){
      setIsAccCreated(true)
    }else{
      const loginInterval = setTimeout(()=>{
        setIsLogin(true)
      },2000)

      interval.current = loginInterval;
      console.log(interval.current)
      
      return () => {
        clearInterval(loginInterval)
      }
    }
    },[])

   

  return (
    <>
      <Navbar interval={interval} isAccCreated={isAccCreated} setShowUserAccount={setShowUserAccount} setIsLogin={setIsLogin} setIsAccCreated={setIsAccCreated}/>
      <Home />
      <About />
      <Menu />
      <Blog />
      <Contact />
      {islogin && <LoginCard setIsLogin={setIsLogin} setIsLogoutSucess={setIsLogoutSucess} setIsloading={setIsloading} setIsSignUp={setIsSignUp}/>}
      {isLoading && <LoadingPage isAccCreated={isAccCreated} setIsloading={setIsloading} setIsLoginSucess={setIsLoginSucess} setIsAccCreated={setIsAccCreated} setIsLogoutSucess={setIsLogoutSucess}/>}
      {isLoginSuccess && <LoginSuccessfull setIsLoginSucess={setIsLoginSucess}/>}
      {isSignUp && <SignUpForm setIsLogin={setIsLogin} setIsSignUp={setIsSignUp} setIsAccCreated={setIsAccCreated}/>}
      {showUserAccount && <UserDetails setShowUserAccount={setShowUserAccount} setIsAccCreated={setIsAccCreated} setIsLogoutAlert={setIsLogoutAlert}/> }
      {isLogoutAlert && <LogoutAlert setIsLogoutAlert={setIsLogoutAlert} setIsAccCreated={setIsAccCreated} setShowUserAccount={setShowUserAccount} setIsloading={setIsloading}/>}
      {isLogoutSuccess && <LogoutSuccessfull setIsLogoutSucess={setIsLogoutSucess} />}
    </>
  );
}

export default Website;
