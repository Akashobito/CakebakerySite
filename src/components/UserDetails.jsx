import React, { useEffect, useState } from "react";

function UserDetails({ setShowUserAccount, setIsLogoutAlert }) {
  const [userInfo, setUserInfo] = useState({
    fullName: '',
    email: '',
    mobile: ''
  });
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userInfo")) || {};
    setUserInfo({ ...userDetails });
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleSave = () => {
    setIsEdit(false);
    handleLocalStorage();
  };

  const handleLocalStorage = () => {
    const newUserData = JSON.stringify(userInfo);
    // console.log(newUserData)
    localStorage.setItem("userInfo", newUserData);
  };

  const handleUserDetails = () => {
    setShowUserAccount(false);
  };

  const handleLogout = () => {
    setIsLogoutAlert(true);
  };

  return (
    <div className="font-Roboto [&_button]:hover:cursor-point fixed top-0 z-20 box-border flex h-[100vh] w-full items-center justify-center backdrop-blur-md backdrop-brightness-80">
      <div className="user-details font-Roboto mobile:text-lg mobile:w-90 relative flex w-120 flex-col rounded-2xl bg-white p-4 text-xl [&_input]:outline-0">
        <div
          onClick={handleUserDetails}
          className="absolute top-[-14px] right-[-14px] rounded-4xl bg-white px-1.5 py-1.5 hover:cursor-pointer"
        >
          <i className="fa-solid fa-x mobile:text-sm text-lg"></i>
        </div>
        <div className="mobile:text-xl mb-2 text-2xl font-semibold">
          User Details
        </div>

        <div className="mb-10 text-center">
          <i className="fa-solid fa-circle-user text-8xl text-orange-400"></i>
        </div>

        <div className="mobile:ml-5 ml-10 grid grid-cols-[20%_70%] gap-x-2 gap-y-2 [&_p]:font-medium">
          <div className="flex h-9 items-center pl-1">
            <p>Name</p>
          </div>

          <div
            className={
              isEdit
                ? "flex h-9 items-center border-1 pl-1"
                : "flex h-9 items-center pl-1"
            }
          >
            <input
              className="w-fit"
              value={userInfo.fullName}
              onChange={(e) => {
                setUserInfo({ ...userInfo, fullName: e.target.value });
              }}
              readOnly={isEdit ? false : true}
            ></input>
          </div>

          <div className="flex h-9 items-center pl-1">
            <p>Email</p>
          </div>

          <div className="flex h-9 items-center pl-1">
            <input
              value={userInfo.email}
              onChange={(e) => {
                setUserInfo({ ...userInfo, email: e.target.value });
              }}
              readOnly
            ></input>
          </div>

          <div className="flex h-9 items-center pl-1">
            <p>Mobile</p>
          </div>

          <div className="flex h-9 items-center pl-1">
            <input
              value={userInfo.mobile}
              onChange={(e) => {
                setUserInfo({ ...userInfo, mobile: e.target.value });
              }}
              readOnly
            ></input>
          </div>

          <div className="flex h-9 items-center pl-1">
            <p>Orders</p>
          </div>

          <div className="flex h-9 items-center pl-1">
            <span>0</span>
          </div>
        </div>

        <div className="mt-10 mb-5 self-center">
          {isEdit ? (
            <button
              className="text-xle w-fit cursor-pointer self-center rounded-xl bg-gray-100 px-5 py-3"
              onClick={handleSave}
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={handleEdit}
              className="w-fit cursor-pointer self-center rounded-xl border-1 border-orange-400 bg-gray-100 px-5 py-3 text-xl"
            >
              Edit
            </button>
          )}

          <button
            onClick={handleLogout}
            className="ml-10 w-fit cursor-pointer self-center rounded-xl bg-orange-400 px-5 py-3 text-xl text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(UserDetails);
