import React from "react";

function LogoutSuccessfull({setIsLogoutSucess}) {

  const handleCancel = () => {
    setIsLogoutSucess(false);
  }

  return (
    <div className="font-Roboto fixed top-0 z-20 flex h-[100vh] w-full items-center justify-center backdrop-blur-md backdrop-brightness-80 [&_button]:hover:cursor-pointer">
      <div className="Login-successfull flex w-120 flex-col items-center justify-center space-y-7 rounded-2xl bg-white p-10 text-xl shadow-sm font-Roboto mobile:w-80">
        <div className="rounded-[100%] bg-orange-400 p-4 py-5 text-white mobile:p-[8.5px] mobile:py-[11px]">
          <i className="fa-solid fa-check text-5xl mobile:text-3xl"></i>
        </div>
        <p className="font-bold mobile:text-lg ">Successfully Logged out</p>
        <button onClick={handleCancel} className="mobile:px-3 mobile:py-1 mobile:text-base rounded-2xl bg-orange-400 px-5 py-2 font-bold tracking-wider text-white">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LogoutSuccessfull;
      