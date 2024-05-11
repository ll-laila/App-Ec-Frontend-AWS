import React from "react";
import styles from "../../styles/styles";
import { toast } from "react-toastify";


const Sponsored = () => {
  return (
    <div className="pt-5">
    <div
      className={`${styles.section} hidden sm:block bg-white py-10 px-5 mb-12 cursor-pointer shadow-lg pt-6 rounded-xl`}
    > 
      <div className="flex justify-between w-full pt-5">
        <div className="flex items-start">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png"
            alt=""
            style={{width:"150px", objectFit:"contain",paddingLeft:"10px"}}
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1280px-Samsung_Logo.svg.png"
            style={{width:"150px", objectFit:"contain", paddingTop:"10%"}}
            alt=""
          />
        </div> 
        <div className="flex items-start">
          <img
            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
            style={{width:"150px", objectFit:"contain"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png"
            style={{width:"150px", objectFit:"contain" , paddingTop:"10%"}}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png"
            style={{width:"150px", objectFit:"contain" ,  padding:"10px",paddingBottom:"15px"}}
            alt=""
          />
        </div>

      </div>
    </div></div>
  );
};

export default Sponsored;
