import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import {GrWorkshop} from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { CiMoneyBill } from "react-icons/ci";
import { Link } from "react-router-dom";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { MdOutlineLocalOffer } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";

const AdminSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/admin/dashboard" className="w-full flex items-center">
          <RxDashboard
            size={30}
            color={`${active === 1 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 1 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Tableau de bord

          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 2 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
           Les Commandes
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-sellers" className="w-full flex items-center">
          <GrWorkshop
            size={30}
            color={`${active === 3 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 3 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Les vendeurs
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-users" className="w-full flex items-center">
          <HiOutlineUserGroup
            size={30}
            color={`${active === 4 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 4 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
           Les utilisateurs
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-products" className="w-full flex items-center">
          <BsHandbag
            size={30}
            color={`${active === 5 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 5 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Les produits
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/admin-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 6 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 6 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
           Les promontions
          </h5>
        </Link>
      </div>



      <div className="w-full flex items-center p-4">
        <Link
          to="/admin-withdraw-request"
          className="w-full flex items-center"
        >
          <CiMoneyBill
            size={30}
            color={`${active === 7 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 7 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
           Demande de retrait
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/profile"
          className="w-full flex items-center"
        >
          <AiOutlineSetting
            size={30}
            color={`${active === 8 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 8 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
          Paramètres
          </h5>
        </Link>
      </div>

    </div>
  );
};

export default AdminSideBar;
