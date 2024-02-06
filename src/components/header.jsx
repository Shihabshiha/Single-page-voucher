import { useEffect, useState } from "react";
import { format } from "date-fns";

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formatted = format(today, "dd-MM-yyyy");
    setCurrentDate(formatted);
  }, []);

  return (
    <div className="mt-4">
      <h1 className="bg-yellow-300 text-center font-semibold">Header</h1>
      <div className="container p-10 px-24">
        <div className="flex  justify-between">
          <div className="flex">
            <p>Vr No :-</p>
            <input
              type="text"
              name="vr_number"
              id="vr_number"
              className="rounded-sm border ml-1"
            />
          </div>
          <div className="flex">
            <p>Vr Date :-</p>
            <input
              type="text"
              name="vr_date"
              id="vr_date"
              value={currentDate}
              className="rounded-sm border ml-1"
              readOnly
            />
          </div>
          <div className="flex">
            <p>Status :-</p>
            <select
              className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-2 ml-1"
              id="status"
            >
              <option value="actice">A</option>
              <option value="inactice">I</option>
            </select>
          </div>
        </div>
        <div className="flex mt-10 justify-between">
          <div className="flex">
            <p>Ac Name :-</p>
            <input
              type="text"
              id="ac_name"
              name="ac_name"
              className="rounded-sm border ml-1 w-96"
            />
          </div>
          <div className="flex">
            <p>Ac Amt</p>
            <input
              type="text"
              id="ac_amt"
              name="ac_amt"
              className="rounded-sm border ml-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
