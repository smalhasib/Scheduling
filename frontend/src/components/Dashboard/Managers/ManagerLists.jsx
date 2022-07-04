import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { getManagers, deleteEmployee } from "../../../Api/Api";

const ManagerLists = () => {
  const [managers, setManagers] = useState([]);

  const deleteEmp = async (id) => {
    await deleteEmployee(id);
    FetchData();
  };

  const FetchData = async () => {
    const res = await getManagers();
    setManagers(res.data);
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <>
      <div className="w-3/4 absolute top-[20%] left-[320px] rounded-lg">
        <div className="flex justify-between items-center"></div>
        <div className="overflow-x-auto">
          <table className="w-full text-md text-left">
            <thead className="text-gray-600 text-lg bg-gray-400">
              <tr>
                <th scope="col" className="px-2 py-3">
                  MID
                </th>
                <th scope="col" className="px-2 py-3">
                  Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Age
                </th>
                <th scope="col" className="px-2 py-3">
                  NID
                </th>
                <th scope="col" className="px-2 py-3">
                  Address
                </th>
                <th scope="col" className="px-2 py-3">
                  Phone
                </th>
                <th scope="col" className="px-2 py-3">
                  Email
                </th>
                <th scope="col" className="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {managers.map((man) => {
                return (
                  <tr
                    className={`bg-white  border-b hover:bg-gray-50`}
                    key={man.EID}
                  >
                    <td className="px-2 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {man.EID}
                    </td>
                    <td className="px-2 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {man.name}
                    </td>
                    <td className="px-2 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {man.age === null && "Please update"}
                    </td>
                    <td className="px-2 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {man.NID === null && "Please update"}
                    </td>
                    <td className="px-2 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {man.address === null && "Please update"}
                    </td>
                    <td className="px-2 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {man.phone === null && "Please update"}
                    </td>
                    <td className="px-2 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {man.email}
                    </td>
                    <td className="px-2 py-4 font-normal text-gray-700 whitespace-nowrap">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => deleteEmp(man.EID)}>
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

export default ManagerLists;
