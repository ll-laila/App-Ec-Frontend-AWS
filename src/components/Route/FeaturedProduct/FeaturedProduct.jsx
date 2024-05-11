import React, { useEffect, useState } from "react";
//import { useSearchParams } from "react-router-dom";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import axios from "axios";
import { server } from "../../../server";

const FeaturedProduct = () => {
  const [data, setData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${server}/product/get-all-products`)
      .then((res) => {
        setAllProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    let sortedData = [...allProducts];
    sortedData.sort(() => Math.random() - 0.9);
    sortedData.sort((a, b) => b.discountPrice - a.discountPrice);
    setData(sortedData);
  }, [allProducts]);

  const goToPreviousProducts = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? data.length - 1 : newIndex;
    });
  };

  const goToNextProducts = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= data.length ? 0 : newIndex;
    });
  };

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Produits populaires</h1>
        </div>
        <div className="grid grid-cols-5 gap-[20px] md:grid-cols-5 md:gap-[25px] lg:grid-cols-5 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data.length > 0 && (
            <>
              {data
                .slice(currentIndex, currentIndex + 5)
                .map((product, index) => (
                  <div key={index}>
                    <ProductCard data={product} />
                  </div>
                ))}
            </>
          )}
        </div>
        <div class="flex items-center justify-center py-6 lg:px-0 sm:px-6 px-2 pb-4">
          <div class="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200">
            <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer" onClick={goToNextProducts}>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p class="text-[16px] ml-3 font-medium leading-none ">Avant</p>
            </div>
            <div class="flex items-center pt-3 text-gray-600 hover:text-indigo-700 cursor-pointer" onClick={goToPreviousProducts}>
              <p class="text-[16px] font-medium leading-none mr-3">Suivant</p>
              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.1665 4H12.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
