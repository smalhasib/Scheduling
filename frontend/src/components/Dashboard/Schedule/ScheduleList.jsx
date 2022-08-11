import React from "react";
import { DeleteSingleSchedule } from "../../../Api/Api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const ScheduleLists = ({ getAllSchedule, scheduleLists }) => {
  const DeleteSchedule = async (id) => {
    await DeleteSingleSchedule(id);
    getAllSchedule();
  };

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
                  MID
                </th>
                <th scope="col" className="px-2 py-3">
                  Date
                </th>
                <th scope="col" className="px-2 py-3">
                  Shift
                </th>
                <th scope="col" className="px-2 py-3">
                  Status
                </th>
                <th scope="col" className="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {scheduleLists.map((schedule) => {
                return (
                  <tr
                    className={`bg-white  border-b hover:bg-gray-50`}
                    key={schedule.SID}
                  >
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.SID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.MID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {new Date(schedule.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.shift}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.status}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => DeleteSchedule(schedule.PID)}>
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
};

export default ScheduleLists;
