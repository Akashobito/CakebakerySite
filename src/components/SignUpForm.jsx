import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { number, object, ref, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";

let initialpass; //for checking the password mismatch

function RegisterForm({ setIsSignUp, setIsLogin, setIsAccCreated}) {
  const [isPassInit, setIsPassInit] = useState(true);
  const [isPassConf, setIsPassConf] = useState(true);

  const initEyeRef = useRef(null);
  const confEyeRef = useRef(null);
  const initPassInputRef = useRef(null);
  const confPassInputRef = useRef(null);

  const schema = object({
    firstName: string().required("First Name is Required Field"),
    secondName: string().required("Second Name is Required Field"),
    email: string().required("Email is Required Field").email(),
    mobile: number()
      .typeError("Invalid Mobile Number")
      .required()
      .test("mobile-check", "Invalid Number Length", (value) => {
        const stringOfNumber = String(value);
        return stringOfNumber.length === 10;
      }),
    password: object({
      initialpassword: string()
        .required("This Field is Required")
        .test("", "", (values) => {
          initialpass = values;
          return true;
        }),
      confirmpassword: string()
        .required("This Field is Required")
        .test("passwordcheck", "Password Mismatch", (value) => {
          return initialpass === value;
        }),
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    control,
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      secondName: "",
      email: "",
      password: {
        initialpassword: "",
        confirmpassword: "",
      },
    },
    mode: "all",
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      resetEye();
      setIsSignUp(false);
    }
  });

  const { ref: initPassRegRef, ...initPassReg } = register(
    "password.initialpassword",
  );

  const { ref: confPassRegRef, ...confPassReg } = register(
    "password.confirmpassword",
  );

  const onSubmit = (data) => {
    console.log(data);

    const fullName = (data.firstName + " " + data.secondName).toUpperCase();

    const userData = {
      fullName: fullName,
      firstName: data.firstName,
      secondName: data.secondName,
      email: data.email,
      mobile: data.mobile,
    };

    setIsAccCreated(true)
    handleLocalStorage(userData);
  };

  const onError = (error) => {
    console.log(error);
  };

  const handleInitEye = () => {
    const initPassElement = initPassInputRef.current;
    const initPassEyeElement = initEyeRef.current;
    if (initPassElement.type === "password") {
      setIsPassInit(false); //it is realiable
      // initPassElement.type = "text";   //previous version but not realiable
      initPassEyeElement.classList.add("fa-eye-slash");
      initPassEyeElement.classList.remove("fa-eye");
    } else {
      setIsPassInit(true);
      // initPassElement.type = "password";
      initPassEyeElement.classList.add("fa-eye");
      initPassEyeElement.classList.remove("fa-eye-slash");
    }
  };

  const handleConfEye = () => {
    const confpassElement = confPassInputRef.current;
    const confPassEyeElement = confEyeRef.current;
    if (confpassElement.type === "password") {
      // confpassElement.type = "text";
      setIsPassConf(false);
      confPassEyeElement.classList.add("fa-eye-slash");
      confPassEyeElement.classList.remove("fa-eye");
    } else {
      setIsPassConf(true);
      confpassElement.type = "password";
      confPassEyeElement.classList.add("fa-eye");
      confPassEyeElement.classList.remove("fa-eye-slash");
    }
  };

  const resetEye = () => {
    const initPassEyeElement = initEyeRef.current;
    const confPassEyeElement = confEyeRef.current;
    initPassEyeElement.classList.add("fa-eye");
    initPassEyeElement.classList.remove("fa-eye-slash");
    confPassEyeElement.classList.add("fa-eye");
    confPassEyeElement.classList.remove("fa-eye-slash");
  };

  const handleReset = () => {
    reset();
    resetEye();
  };

  const handleBack = () => {
    setIsSignUp(false);
    setIsLogin(true);
  };

  const handleLocalStorage = (userData) => {
    const userInfoString = JSON.stringify(userData);
    localStorage.setItem("userInfo", userInfoString);
  };

  const handleIsSignUp = () => {
    setIsSignUp(false);
  };

  return (
    <div className="font-Roboto fixed top-0 mobile:top-2 z-20 flex h-[100vh] w-full items-center justify-center backdrop-blur-md backdrop-brightness-80 [&_button]:hover:cursor-pointer">
      <div className="register-form relative w-120 rounded-2xl bg-white p-5 shadow-sm [&_input]:h-8 [&_input]:rounded-xs [&_input]:pl-3 [&_input]:outline-2 [&_label]:font-semibold mobile:w-80 mobile:[&_label]:text-sm">
        <p className="pb-3 text-xl mobile:text-lg font-semibold mobile:pb-1">SIGN UP</p>

        <div
          onClick={handleIsSignUp}
          className="absolute top-[-14px] right-[-14px] rounded-4xl bg-white px-1.5 py-1.5 hover:cursor-pointer"
        >
          <i className="fa-solid fa-x mobile:text-sm text-lg"></i>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
          <div className="relative mb-1 flex justify-between mobile:flex-col">
            <div className="flex w-full flex-col pr-4 mobile:pr-0 mobile:pb-6 mobile:relative">
              <label htmlFor="name">First Name</label>
              <input {...register("firstName")} id="name" type="text"></input>
              {errors.firstName && (
                <p className="absolute bottom-0 text-xs text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="relative flex w-full flex-col pb-5">
              <label htmlFor="lastName">Last Name</label>
              <input
                {...register("secondName")}
                id="lastName"
                type="text"
              ></input>

              {errors.secondName && (
                <p className="absolute bottom-0 text-xs text-red-500">
                  {errors.secondName.message}
                </p>
              )}
            </div>
          </div>

          <div className="relative flex flex-col pb-6">
            <label htmlFor="email" className="w-fit">
              Email ID
            </label>
            <input {...register("email")} id="email" type="text"></input>

            {errors.email && (
              <p className="absolute bottom-0 text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="relative flex flex-col pb-6">
            <label htmlFor="mobile" className="w-fit">
              Mobile No
            </label>
            <input
              {...register("mobile")}
              id="mobile"
              type="text"
              placeholder="+91"
            ></input>

            {errors.mobile && (
              <p className="absolute bottom-0 text-xs text-red-500">
                {errors.mobile?.message}
              </p>
            )}
          </div>

          {/* <div className="pb-3">
          <label className="flex flex-col" htmlFor="address">
          User Name
          </label>
          <input className="w-full" id="address" type="text"></input>
          </div> */}

          <div className="relative flex w-full flex-col pb-6">
            <label htmlFor="initial">Password</label>
            <input
              {...initPassReg}
              ref={(actualDom) => {
                (initPassRegRef(actualDom),
                  (initPassInputRef.current = actualDom));
              }}
              id="initial"
              type={isPassInit ? "password" : "text"}
            ></input>
            <div
              onClick={handleInitEye}
              className="absolute right-0 bottom-6 w-fit cursor-pointer p-1 px-2"
            >
              <i ref={initEyeRef} className="fa-regular fa-eye"></i>
            </div>
            {errors.password?.initialpassword && (
              <p className="absolute bottom-0 text-xs text-red-500">
                {errors.password.initialpassword.message}
              </p>
            )}
          </div>

          <div className="relative flex w-full flex-col pb-6">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              {...confPassReg}
              ref={(actualDom) => {
                confPassRegRef(actualDom);
                confPassInputRef.current = actualDom;
              }}
              id="confirm"
              type={isPassConf ? "password" : "text"}
            ></input>
            <div
              onClick={handleConfEye}
              className="absolute right-0 bottom-6 w-fit cursor-pointer p-1 px-2"
            >
              <i ref={confEyeRef} className="fa-regular fa-eye"></i>
            </div>
            {errors.password?.confirmpassword && (
              <p className="absolute bottom-0 text-xs text-red-500">
                {errors.password.confirmpassword.message}
              </p>
            )}
          </div>

          <div className="mt-5 text-center mobile:grid mobile:grid-cols-2 mobile:mt-3">
            <button
              onClick={handleBack}
              className="mr-4 rounded-xl bg-gray-50 px-5 py-2 shadow-sm transition duration-75 hover:bg-gray-100"
              type="button"
            >
              Back
            </button>

            <button
              className="mr-4 rounded-xl bg-gray-50 px-5 py-2 shadow-sm transition duration-75 hover:bg-gray-100"
              type="button"
              onClick={handleReset}
            >
              Rest All
            </button>
            <button 
              type="submit"
              className="mobile:col-start-1 mobile:col-end-3 mobile:mt-4 rounded-lg bg-orange-400 px-5 py-2 text-white shadow-sm transition duration-300 "
            >
              Create Account
            </button>
          </div>
          {/* <DevTool control={control}/> */}
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
