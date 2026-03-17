import React, { useEffect } from "react";

function LoadingPage({ setIsloading, setIsLoginSucess }) {
   useEffect(()=>{
    const stateInterval = setTimeout(()=>{
      setIsloading(false);
      setIsLoginSucess(true);
    },3000)

    return () => {
      clearInterval(stateInterval);
    }
  },[])

  const handleCancel = () => {
    setIsloading(false);
    setIsLoginSucess(false);
  };

  return (
    <div className="font-Roboto fixed top-0 z-20 flex h-[100vh] w-full items-center justify-center backdrop-blur-md backdrop-brightness-80 [&_button]:hover:cursor-pointer">
      <div className="Login-successfull mobile:w-80 font-Roboto flex w-120 flex-col items-center justify-center space-y-7 rounded-2xl bg-white p-10 text-xl shadow-sm">
        <div className="mobile:p-[8.5px] mobile:py-[11px] rounded-[100%] bg-orange-400 p-4 py-5 text-white">
          <i className="fa-solid fa-circle-notch mobile:text-4xl animate-spin text-5xl"></i>
        </div>
        <p className="mobile:text-lg font-bold">Processing your request</p>
        <p className="mobile:text-base mobile:w-65 w-80 text-center">
          Please Wait while we process your request, Do not refresh the page.
        </p>
        <button
          onClick={handleCancel}
          className="mobile:px-3 mobile:py-1 rounded-2xl mobile:text-base bg-orange-400 px-5 py-2 font-bold tracking-wider text-white"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default LoadingPage;
