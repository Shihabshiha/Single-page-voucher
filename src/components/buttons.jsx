import { useDispatch } from "react-redux";
import { addRow ,clearData } from "../redux/detailTableSlice";


const Buttons = () => {

  const dispatch = useDispatch();

  const handleAddRow = ()=>{
    dispatch(addRow())
  }

  const handleNew = () => {
    dispatch(clearData())
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
      <button className="mb-2 px-4 py-2 rounded bg-amber-300 hover:bg-amber-400 ">
        Save
      </button>
      <button className="px-4 py-2 rounded bg-amber-300 hover:bg-amber-400 ">
        Print
      </button>
    </div>
  );
};

export default Buttons;
