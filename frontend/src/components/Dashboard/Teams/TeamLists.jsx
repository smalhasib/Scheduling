import React, { useEffect, useState } from "react";
import { GetTeams } from "../../../Api/Api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const TeamLists = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetTeams();
      setTeams(res.data);
    };
    fetchData();
  }, [teams]);
  return (
    <>
      <div className="w-1/2 absolute top-[20%] left-[320px] rounded-lg">
        <div className="flex justify-between items-center"></div>
        <div className="overflow-x-auto">
          <table className="w-full text-md text-left">
            <thead className="text-gray-600 text-lg bg-gray-400">
              <tr>
                <th scope="col" className="px-2 py-3">
                  MID
                </th>
                <th scope="col" className="px-2 py-3">
                  Manager Name
                </th>
                <th scope="col" className="px-2 py-3">
                  WID
                </th>
                <th scope="col" className="px-2 py-3">
                  Worker Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => {
                return (
                  <tr
                    className={`bg-white  border-b hover:bg-gray-50`}
                    key={index}
                  >
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {team.MID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {team.managerName}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {team.WID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {team.workerName}
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
};

export default TeamLists;
