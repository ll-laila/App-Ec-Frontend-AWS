import React from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../static/data";
import { categoriesData } from "../../static/data";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <div>
            <Link to="/">
              <button className="pl-3 text-[50px] font-bold italic">
                e-shop
              </button>
            </Link>
          </div>

          <br />
          <p>
            Explorez notre vaste sélection de produits de qualité pour répondre
            à tous vos besoins, le tout avec un service client exceptionnel.
          </p>
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Produits</h1>
          {categoriesData &&
            categoriesData.map((link, index) => (
              <li key={index}>
                <p
                  className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                >
                  {link.title}
                </p>
              </li>
            ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Navigation</h1>
          {navItems &&
            navItems.map((i, index) => (
              <li key={index}>
                <Link
                  className="text-gray-400 hover:text-teal-400 duration-300
                   text-sm cursor-pointer leading-6"
                  to={i.url}
                >
                  {i.title}
                </Link>
              </li>
            ))}
        </ul>

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold">Contacts</h1>
          <li className="mb-1">Tél : (212) 624562292</li>
          <li className="mb-1">Email : e.shop@gmail.com</li>
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024. Tous droits réservés.</span>
        <span>Conditions · Politique de confidentialité</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
