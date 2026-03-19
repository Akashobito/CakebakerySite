import React from "react";

function LogoutAlert({
  setShowUserAccount,
  setIsLogoutAlert,
  setIsloading
}) {
  const handleConfirm = () => {
    localStorage.removeItem("userInfo");
    setShowUserAccount(false);
    setIsLogoutAlert(false);
    setIsloading(true);
  };

  const handleCancel = () => {
    setIsLogoutAlert(false);
  };

  return (
    <div className="font-Roboto [&_button]:hover:cursor-point fixed top-0 z-20 box-border flex h-[100vh] w-full items-center justify-center backdrop-blur-md backdrop-brightness-80">
      <div className="logout-alert font-Roboto flex flex-col items-center justify-between space-y-8 mobile:space-y-5 rounded-2xl bg-white p-10 mobile:w-80">
        <p className="text-4xl font-bold mobile:text-2xl">Logout Confirmation</p>
        <p className="text-xl mobile:text-base mobile:text-ju">Are you sure you want to logout</p>

        <div className="flex w-full justify-center space-x-15 mobile:space-x-7">
          <button
            onClick={handleConfirm}
            className="w-fit cursor-pointer self-center rounded-xl border-1 border-orange-400 bg-gray-100 px-5 py-3 text-xl mobile:text-lg mobile:px-4 mobile:py-2"
          >
            Confirm
          </button>
          <button
            onClick={handleCancel}
            className="w-fit cursor-pointer self-center rounded-xl bg-orange-400 px-5 py-3 text-xl text-white mobile:px-4 mobile:py-2 mobile:text-lg"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutAlert;
