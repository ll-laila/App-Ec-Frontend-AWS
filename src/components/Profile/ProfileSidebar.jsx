import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineTrackChanges,
} from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


const ProfileSidebar = ({ setActive, active }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        window.location.reload(true);
        toast.success("Déconnexion réussie !");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8">
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(1)}
      >
        <RxPerson size={20} color={active === 1 ? "#f63b60" : ""} />
        <span
          className={`pl-3 text-[18px] font-[400] ${
            active === 1 ? "text-[#f63b60] " : ""
          } 800px:block hidden`}
        >
          Profil
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(2)}
      >
        <HiOutlineShoppingBag size={20} color={active === 2 ? "#f63b60" : ""} />
        <span
          className={`pl-3 text-[18px] font-[400] ${
            active === 2 ? "text-[#f63b60] " : ""
          } 800px:block hidden`}
        >
          Commandes
        </span>
      </div>
      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(3)}
      >
        <HiOutlineReceiptRefund
          size={20}
          color={active === 3 ? "#f63b60" : ""}
        />
        <span
          className={`pl-3 text-[18px] font-[400] ${
            active === 3 ? "text-[#f63b60] " : ""
          } 800px:block hidden`}
        >
          Remboursements
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage size={20} color={active === 4 ? "#f63b60" : ""} />
        <span
          className={`pl-3 text-[18px] font-[400] ${
            active === 4 ? "text-[#f63b60] " : ""
          } 800px:block hidden`}
        >
          Boîte de réception
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(5)}
      >
        <MdOutlineTrackChanges
          size={20}
          color={active === 5 ? "#f63b60" : ""}
        />
        <span
          className={`pl-3 text-[18px] font-[400] ${
            active === 5 ? "text-[#f63b60] " : ""
          } 800px:block hidden`}
        >
          Suivi de commande
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(6)}
      >
        <RiLockPasswordLine size={20} color={active === 6 ? "#f63b60" : ""} />
        <span
          className={`pl-3 text-[18px] font-[400] ${
            active === 6 ? "text-[#f63b60] " : ""
          } 800px:block hidden`}
        >
          Changer le mot de passe
        </span>
      </div>

      <div
        className="flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(7)}
      >
        <TbAddressBook size={20} color={active === 7 ? "#f63b60" : ""} />
        <span
          className={`pl-3 text-[18px] font-[400] ${
            active === 7 ? "text-[#f63b60] " : ""
          } 800px:block hidden`}
        >
          Adresse
        </span>
      </div>

      {user && user?.role === "Admin" && (
        <Link to="/admin/dashboard">
          <div
            className="flex items-center cursor-pointer w-full mb-8"
            onClick={() => setActive(8)}
          >
            <MdOutlineAdminPanelSettings
              size={20}
              color={active === 8 ? "#f63b60" : ""}
            />
            <span
              className={`pl-3 text-[18px] font-[400] ${
                active === 8 ? "text-[#f63b60] " : ""
              } 800px:block hidden`}
            >
              Tableau de bord d'admin
            </span>
          </div>
        </Link>
      )} 

  <Link to="/login">
      <div
        className="single_item flex items-center cursor-pointer w-full mb-8"
        onClick={() => setActive(9) || logoutHandler()}
      >
        <AiOutlineLogin size={20} color={active === 8 ? "#f63b60" : ""} />
        <span
          className={`pl-3 text-[18px] font-[400] ${
            active === 8 ? "text-[#f63b60] " : ""
          } 800px:block hidden`}
        >
              Se déconnecter
        </span>
      </div>
    </Link>
    </div>
  );
};

export default ProfileSidebar;
