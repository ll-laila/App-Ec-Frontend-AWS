import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AdminHeader = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="w-full h-[80px] bg-white shadow-lg sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            className="absolute top-4 left-38"
            width="56"
            height="56"
            src="https://svgsilh.com/svg/35594.svg"
            alt="logo"
          />

          <button className="pl-14 text-[30px] font-bold italic">e-shop</button>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <img
            src={`${user?.avatar?.url}`}
            alt=""
            className="w-[50px] h-[50px] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
