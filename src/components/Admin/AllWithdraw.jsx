import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";
import { DataGrid } from "@material-ui/data-grid";
import { BsPencil } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { toast } from "react-toastify";


const AllWithdraw = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [withdrawData, setWithdrawData] = useState();
  const [withdrawStatus,setWithdrawStatus] = useState('Processing');

  useEffect(() => {
    axios
      .get(`${server}/withdraw/get-all-withdraw-request`, {
        withCredentials: true,
      })
      .then((res) => {
        setData(res.data.withdraws);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "Num demande",
      minWidth: 30,
      flex: 0.2,
    },
    {
      field: "name",
      headerName: "Boutique",
      minWidth: 20,
      flex: 0.23,
    },
    {
      field: "amount",
      headerName: "Montant",
      minWidth: 20,
      flex: 0.23,
    },
    {
      field: "status",
      headerName: "Statut",
      type: "text",
      minWidth: 13,
      flex: 0.2,
    },   
    {
      field: "bankHolderName",
      headerName: " titulaire compte",
      type: "text",
      minWidth: 30,
      flex: 0.3,
    },
    {
      field: "bankAccountNumber",
      headerName: "Num compte",
      minWidth: 30,
      flex: 0.3,
    },
    {
      field: "bankName",
      headerName: "Banque",
      minWidth: 15,
      flex: 0.2,
    }, 
    {
      field: "bankSwiftCode",
      headerName: "SWIFT",
      minWidth: 16,
      flex: 0.2,
    },
      {
      field: "createdAt",
      headerName: "faite à",
      type: "number",
      minWidth: 13,
      flex: 0.2,
    },

    {
      field: " ",
      headerName: "Action",
      type: "number",
      minWidth: 13,
      flex: 0.2,
      renderCell: (params) => {

        return (
          <BsPencil
            size={20}
           className={`${params.row.status !== "Processing" ? 'hidden' : '' } mr-5 cursor-pointer`}
            onClick={() => setOpen(true) || setWithdrawData(params.row)}
          />
        );
      },
    },
  ];

  const handleSubmit = async () => {
    await axios
      .put(`${server}/withdraw/update-withdraw-request/${withdrawData.id}`,{
        sellerId: withdrawData.shopId,
      },{withCredentials: true})
      .then((res) => {
        toast.success("Demande de retrait mise à jour avec succès !");
        setData(res.data.withdraws);
        setOpen(false);
      });
  };

  const row = [];

  data &&
    data.forEach((item) => {
      row.push({
        id: item._id,
        name: item.seller.name,
        amount: item.amount + " $ ",
        status: item.status,
        bankName: item.seller.withdrawMethod.bankName,
        bankSwiftCode: item.seller.withdrawMethod.bankSwiftCode,
        bankAccountNumber:item.seller.withdrawMethod.bankAccountNumber,
        bankHolderName: item.seller.withdrawMethod.bankHolderName,
        createdAt: item.createdAt.slice(0, 10),
      });
    });
  return (
    <div className="w-full flex items-center pt-5 justify-center">
      <div className="w-[100%] bg-white shadow-lg">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
      {open && (
        <div className="w-full fixed h-screen top-0 left-0 bg-[#00000031] z-[9999] flex items-center justify-center">
          <div className="w-[50%] min-h-[40vh] bg-white rounded shadow-lg p-4">
            <div className="flex justify-end w-full">
              <RxCross1 size={25} onClick={() => setOpen(false)} />
            </div>
          <div className="p-5">
            <h1 className="text-[25px] text-center font-Poppins  ">
            Mettre à jour le statut de retrait
            </h1><hr/>
            <br />
            <div className="w-full flex items-center justify-center">
            <select
              name=""
              id=""
              onChange={(e) => setWithdrawStatus(e.target.value)}
              className="w-[200px] h-[35px] border rounded"
            >
              <option value={withdrawStatus}>{withdrawData.status}</option>
              <option value={withdrawStatus}>Succeed</option>
            </select>
            </div>
            
            <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className={`block ${styles.button} text-white !h-[42px] mt-4 text-[18px] `}
              onClick={handleSubmit}
            >
              Modifier
            </button>
            </div>
           </div> 
          </div>
        </div>
      )}
    </div>
  );
};

export default AllWithdraw;
