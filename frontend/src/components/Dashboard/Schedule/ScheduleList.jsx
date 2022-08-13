import React from "react";
import { DeleteSingleSchedule } from "../../../Api/Api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const ScheduleLists = ({
  getAllSchedule,
  scheduleLists,
  employeeSchedule,
  managerSchedule,
}) => {
  const DeleteSchedule = async (id) => {
    await DeleteSingleSchedule(id);
    getAllSchedule();
  };
    const role = JSON.parse(localStorage.getItem("user")).role;

  return (
    <>
      <div className="w-3/4 absolute top-[20%] left-[320px] rounded-lg">
        {role === "admin"
          ?
            <>
              <div className="flex justify-between items-center"></div>
              <div className="overflow-x-auto">
                <table className="w-full text-md text-left">
                  <thead className="text-gray-600 text-lg bg-gray-400">
                    <tr>
                      <th scope="col" className="px-2 py-3">
                        SCID
                      </th>
                      <th scope="col" className="px-2 py-3">
                        SID
                      </th>
                      <th scope="col" className="px-2 py-3">
                        Time
                      </th>
                      <th scope="col" className="px-2 py-3">
                        MID
                      </th>
                      <th scope="col" className="px-2 py-3">
                        Date
                      </th>

                      <th scope="col" className="px-2 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {employeeSchedule.map((schedule) => {
                      return (
                        <tr
                          className={`bg-white  border-b hover:bg-gray-50`}
                          key={schedule.SID}
                        >
                          <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                            {schedule.SCID}
                          </td>
                          <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                            {schedule.SID}
                          </td>
                          <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                            {schedule.Shift_time}
                          </td>
                          <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                            {schedule.MID}
                          </td>
                          <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                            {new Date(schedule.date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                            <IconButton>
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              onClick={() => DeleteSchedule(schedule.PID)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </>
            :null
          }

        {/*  */}

        <div className="flex justify-between items-center mt-10">
          <span className="text-2xl font-bold text-gray-700">
            Manager Schedule
          </span>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="w-full text-md text-left">
            <thead className="text-gray-600 text-lg bg-gray-400">
              <tr>
                <th scope="col" className="px-2 py-3">
                  SCID
                </th>
                <th scope="col" className="px-2 py-3">
                  SID
                </th>
                <th scope="col" className="px-2 py-3">
                  Time
                </th>
                <th scope="col" className="px-2 py-3">
                  MID
                </th>
                <th scope="col" className="px-2 py-3">
                  Manager name
                </th>
                <th scope="col" className="px-2 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {managerSchedule.map((schedule) => {
                return (
                  <tr
                    className={`bg-white  border-b hover:bg-gray-50`}
                    key={schedule.SID}
                  >
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.SCID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.SID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.Shift_time}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.MID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.name}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {new Date(schedule.date).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/*  */}

        <div className="flex justify-between items-center mt-10">
          <span className="text-2xl font-bold text-gray-700">
            Employee Schedule
          </span>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="w-full text-md text-left">
            <thead className="text-gray-600 text-lg bg-gray-400">
              <tr>
                <th scope="col" className="px-2 py-3">
                  SCID
                </th>
                <th scope="col" className="px-2 py-3">
                  SID
                </th>
                <th scope="col" className="px-2 py-3">
                  Time
                </th>
                <th scope="col" className="px-2 py-3">
                  WID
                </th>
                <th scope="col" className="px-2 py-3">
                  Employee name
                </th>
                <th scope="col" className="px-2 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {employeeSchedule.map((schedule) => {
                return (
                  <tr
                    className={`bg-white  border-b hover:bg-gray-50`}
                    key={schedule.SID}
                  >
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.SCID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.SID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.Shift_time}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.WID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {schedule.name}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {new Date(schedule.date).toLocaleDateString()}
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
