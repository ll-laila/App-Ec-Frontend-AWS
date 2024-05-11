import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat shadow-lg ${styles.noramlFlex}`}
      style={{
        backgroundImage: `url(https://www.tinsoldier.co.nz/wp-content/uploads/2022/07/intelligent-ecom-min.png)`,
        backgroundSize: "auto 100%",
        backgroundPosition: "right",
      }}
    >
      <div
        className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat shadow-lg ${styles.noramlFlex}`}
        style={{
          backgroundImage: `url(images/b3.svg)`,
          backgroundSize: "auto 100%",
        }}
      >
        <div className={`${styles.section} w-[95%] 800px:w-[95%] pl-8 `}>
          <h1
            className={`text-[44x] leading-[1.2] 800px:text-[60px] text-[#3d3a3a]  font-[600] italic `}
          >
            Explorez, achetez et créez votre <br />
            boutique en ligne avec
            <span className="text-indigo-500 font-bold"> e-shop</span>
          </h1>
          <p className="p-3 italic text-[30x] ">
            Explorez une large gamme de produits de qualité proposés par des
            vendeurs de confiance sur notre plateforme.
            <br /> Découvrez, trouvez et achetez facilement, avec la liberté de
            créer votre propre boutique pour vendre vos propres produits.
          </p>
          <Link to="/products" className="inline-block">
            <div className={`${styles.button} bg-[#dea23b] mt-5 shadow-lg `}>
              <span className="text-[#fff] font-[Poppins] text-[18px]">
                Explorer
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
