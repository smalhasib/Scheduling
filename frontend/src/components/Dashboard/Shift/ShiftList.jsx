import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const ShiftList = ({shift}) => {
  return (
    <>
      <div className="w-3/4 absolute top-[20%] left-[320px] rounded-lg">
        <div className="flex justify-between items-center"></div>
        <div className="overflow-x-auto">
          <table className="w-full text-md text-left">
            <thead className="text-gray-600 text-lg bg-gray-400">
              <tr>
                <th scope="col" className="px-2 py-3">
                  SID
                </th>
                <th scope="col" className="px-2 py-3">
                  Shift name
                </th>
                <th scope="col" className="px-2 py-3">
                  Shift time
                </th>
                <th scope="col" className="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {shift.map((shi) => {
                return (
                  <tr
                    className={`bg-white  border-b hover:bg-gray-50`}
                    key={shi.SID}
                  >
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {shi.SID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {shi.Shift_name}
                    </td>

                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {shi.Shift_time}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      <IconButton>
                        <EditIcon />
                      </IconButton> 
                       <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ShiftList