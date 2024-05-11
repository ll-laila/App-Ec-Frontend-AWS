import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getAllOrdersOfUser } from "../../redux/actions/order";


const TrackOrder = () => {
  const { orders } = useSelector((state) => state.order);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
 

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfUser(user._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      {" "}
      <div className="w-full h-[80vh] flex justify-center items-center shadow-lg ">
        <div className="w-[40%] 800px:w-[40%] h-[40vh] bg-white rounded-md shadow-lg p-4">
          {data && data?.status === "Processing" ? (
            <h1 className="text-[50px] flex justify-center p-12">
              Votre commande est en cours de traitement en boutique.
            </h1>
          ) : data?.status === "Transferred to delivery partner" ? (
            <h1 className="text-[50px] flex justify-center p-12">
              Votre commande est en route vers le partenaire de livraison.
            </h1>
          ) : data?.status === "Shipping" ? (
            <h1 className="text-[50px] flex justify-center p-12">
              Votre Commande est en route avec notre partenaire de livraison.
            </h1>
          ) : data?.status === "Received" ? (
            <h1 className="text-[50px] flex justify-center p-12">
              Votre commande est dans votre ville. Notre livreur le livrera.
            </h1>
          ) : data?.status === "On the way" ? (
            <h1 className="text-[50px] flex justify-center p-12">
              Notre livreur se chargera de vous livrer votre commande.
            </h1>
          ) : data?.status === "Delivered" ? (
            <h1 className="text-[50px] flex justify-center p-12">
              Votre commande est livrée !{" "}
            </h1>
          ) : data?.status === "Processing refund" ? (
            <h1 className="text-[50px] flex justify-center p-12">
              Votre remboursement est en cours de traitement !{" "}
            </h1>
          ) : data?.status === "Refund Success" ? (
            <h1 className="text-[50px] flex justify-center p-12">
              Votre remboursement est un succès !{" "}
            </h1>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
