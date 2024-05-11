import React from "react";
import { AiOutlineFolderAdd, AiOutlineGift } from "react-icons/ai";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { VscNewFile } from "react-icons/vsc";
import { CiMoneyBill, CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { BiMessageSquareDetail } from "react-icons/bi";
import { HiOutlineReceiptRefund } from "react-icons/hi";

const DashboardSideBar = ({ active }) => {
  return (
    <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
      {/* single item */}
      <div className="w-full flex items-center p-4">
        <Link to="/dashboard" className="w-full flex items-center">
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
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <FiShoppingBag
            size={30}
            color={`${active === 2 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 2 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Tous les commandes
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <FiPackage
            size={30}
            color={`${active === 3 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 3 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Tous les Produits
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <AiOutlineFolderAdd
            size={30}
            color={`${active === 4 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 4 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Créer un Produit
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <MdOutlineLocalOffer
            size={30}
            color={`${active === 5 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 5 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Tous les événements
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <VscNewFile
            size={30}
            color={`${active === 6 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 6 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            créer un événement Event
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link
          to="/dashboard-withdraw-money"
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
            Retirer de l'argent
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiMessageSquareDetail
            size={30}
            color={`${active === 8 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 8 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Boîte de réception
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <AiOutlineGift
            size={30}
            color={`${active === 9 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 9 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Codes de réduction
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <HiOutlineReceiptRefund
            size={30}
            color={`${active === 10 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 10 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Remboursements
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4">
        <Link to="/settings" className="w-full flex items-center">
          <CiSettings
            size={30}
            color={`${active === 11 ? "#870bbcf4" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[560] ${
              active === 11 ? "text-[#870bbcf4]" : "text-[#555]"
            }`}
          >
            Paramètres
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;
