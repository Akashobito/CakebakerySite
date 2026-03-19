import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { object, string, number } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import LoadingPage from "./LoadingPage";
import LoginSuccessfull from "./LoginSuccessfull";

function LoginCard({ setIsLogin, setIsloading, setIsSignUp}) {
  const inputRef = useRef(null); //own ref for password input element
  const eyeRef = useRef(null);
  const [isPass, setIsPass] = useState(true);

  const schema = object({
    email: string()
      .required()
      .email()
      .test("Emailadmin", "Email should not be admin@gamil.com", (value) => {
        return value !== "admin@gmail.com";
      }),
    password: string()
      .required()
      .test("passcheck", "Password should not be admin@123", (value) => {
        return value !== "admin@123";
      }),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { isDirty, isValid, isSubmitSuccessful, errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const { ref, ...passwordRegister } = register("password"); //register ref for inputElement password

  useEffect(() => {
    if (isSubmitSuccessful) {
      console.log("hell");
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleIsLogin = () => {
    setIsLogin(false);
  };

  const handleEyeButton = () => {
    if (inputRef) {
      const inputElement = inputRef.current;
      const eyeElement = eyeRef.current;
      if (inputElement.type === "password") {
        inputElement.type = "text";
        setIsPass(false);
        eyeElement.classList.add("fa-eye-slash");
        eyeElement.classList.remove("fa-eye");
      } else {
        setIsPass(true);
        inputElement.type = "password";
        eyeElement.classList.add("fa-eye");
        eyeElement.classList.remove("fa-eye-slash");
      }
    }
  };

  const postDetails = async (data) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    await axios.post("http://localhost:3000/FormData", body);
  };

  const onSubmit = async (data) => {
    console.log(data);
    // await postDetails(data);
    setIsLogin(false);
    setIsloading(true);
  };

  const onError = (error) => {
    console.log(error);
  };

  const handleSignUp = () =>{
    setIsLogin(false)
    setIsSignUp(true);
  }

  return (
    <>
      <div className="fixed top-0 z-20 flex h-[100vh] w-full items-center justify-center backdrop-blur-md backdrop-brightness-80 [&_button]:hover:cursor-pointer">
        <div className="relative">
          <div className="login-card font-Roboto mobile:w-80 mobile:text-base w-120 overflow-hidden rounded-2xl text-xl shadow-sm">
            <div
              className="mobile:top-[-10px] mobile:right-[-10px] absolute top-[-14px] right-[-14px] rounded-4xl bg-white px-1 py-0.5 hover:cursor-pointer"
              onClick={handleIsLogin}
            >
              <i className="fa-solid fa-x mobile:text-sm text-lg"></i>
            </div>
            <div className="top-potion bg-white p-5 text-black">
              <div className="section-1 flex justify-between">
                <div className="w-70">
                  <p className="mb-2 font-semibold">Login to your account</p>
                  <p className="mobile:w-50 text-[#3d3c3c]">
                    Enter you email below to login to your account
                  </p>
                </div>

                <p onClick={handleSignUp} className="mobile:w-20 font-medium hover:cursor-pointer">
                  Sign Up
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="email-input relative mt-4 flex flex-col pb-7">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    className="mt-1 rounded-xl py-1 pr-5 pl-4 text-lg outline-2"
                    id="email"
                    type="text"
                    {...register("email")}
                  ></input>
                  {errors.email && (
                    <p className="mobile:text-sm absolute bottom-0 pl-1 text-base text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="password-input relative mt-2 flex flex-col pb-7">
                  <div className="flex justify-between">
                    <label className="font-semibold" htmlFor="password">
                      Password
                    </label>
                    <p className="mobile:top-[3px] relative top-[7px] text-sm font-medium hover:cursor-pointer">
                      Forgot your password?
                    </p>
                  </div>

                  <input
                    ref={(actualDom) => {
                      ref(actualDom);
                      inputRef.current = actualDom;
                    }}
                    {...passwordRegister}
                    className="mt-1 rounded-xl py-1 pr-12 pl-4 text-lg outline-2"
                    type={isPass? 'password': 'text'}
                    id="password"
                  ></input>
                  <i
                    ref={eyeRef}
                    className="fa-regular fa-eye absolute top-10 right-2 hover:cursor-pointer"
                    onClick={handleEyeButton}
                  ></i>
                  {errors.password && (
                    <p className="mobile:text-sm absolute bottom-0 pl-1 text-base text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <div className="button-potion border-black-500 mobile:py-4 bg-white p-4 px-6 py-6 font-medium">
                  <button
                    type="submit"
                    title="Enter the Fields"
                    className="mt-1 mb-5 w-full rounded-xl bg-orange-400 py-[6px] text-white disabled:!cursor-not-allowed"
                    disabled={!isDirty || !isValid || isSubmitSuccessful}
                    >
                    Login
                  </button>
                  <button
                    type="button"
                    className="w-full rounded-xl bg-orange-400 py-[6px] text-white"
                  >
                    Login with Google
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginCard;
