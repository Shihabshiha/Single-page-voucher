import { useDispatch, useSelector } from "react-redux";
import { addRow ,clearData } from "../redux/detailTableSlice";
import { ToastContainer , toast } from "react-toastify";

const Buttons = () => {

  const dispatch = useDispatch();
  const headerData = useSelector((state)=>state.header.headerData)
  const detailData = useSelector((state)=>state.detailTable.detailData)
  console.log('headdderrr',headerData)
  console.log('detaillll',detailData)

  const handleAddRow = ()=>{
    dispatch(addRow())
  }

  const handleNew = () => {
    dispatch(clearData())
  }

  const handleSave = ()=>{
    if (!headerData.vrNo || !headerData.vrDate || !headerData.acName || !headerData.acAmt || !headerData.status) {
      toast.error('Please fill in all fields in the header section.');
      return;
    }

    for (const item of detailData) {
      if (!item.itemCode || !item.itemName || !item.description || !item.qty || !item.rate) {
        toast.error('Please fill in all fields in the detail section.');
        return;
      }
    }

    const dataToSend = {
      header_table: {
        vr_no: headerData.vrNo,
        vr_date: headerData.vrDate,
        ac_name: headerData.acName,
        ac_amt: headerData.acAmt,
        status: headerData.status
      },
      detail_table: detailData.map(item => ({
        vr_no: headerData.vrNo, 
        sr_no: item.srNo,
        item_code: item.itemCode,
        item_name: item.itemName,
        description: item.description,
        qty: item.qty,
        rate: item.rate
      }))
    };
  }

  return (
    <div className="flex h-screen justify-center items-center flex-col ml-3">
      <button className="mb-2 px-4 py-2 rounded bg-amber-300 hover:bg-amber-400"
        onClick={handleNew}
      >
        New
      </button>
      <button className="mb-2 px-3 py-2 rounded bg-amber-300 hover:bg-amber-400 "
        onClick={handleAddRow}
      >
        Insert
      </button>
      <button className="mb-2 px-4 py-2 rounded bg-amber-300 hover:bg-amber-400 "
        onClick={handleSave}
      >
        Save
      </button>
      <button className="px-4 py-2 rounded bg-amber-300 hover:bg-amber-400 ">
        Print
      </button>
    </div>
  );
};

export default Buttons;
