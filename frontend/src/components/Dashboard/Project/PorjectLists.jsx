import React from "react";
import { DeleteSingleProject } from "../../../Api/Api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

const PorjectLists = ({ getAllProject,projectLists }) => {
  const DeleteProject = async (id) => {
    await DeleteSingleProject(id);
    getAllProject();
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
                  PID
                </th>
                <th scope="col" className="px-2 py-3">
                  Name
                </th>
                <th scope="col" className="px-2 py-3">
                  Status
                </th>
                <th scope="col" className="px-2 py-3">
                  Summary
                </th>
                <th scope="col" className="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {projectLists.map((project) => {
                return (
                  <tr
                    className={`bg-white  border-b hover:bg-gray-50`}
                    key={project.PID}
                  >
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {project.PID}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {project.name}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {project.status}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      {project.summary}
                    </td>
                    <td className="px-6 py-4 font-normal text-gray-700 whitespace-nowrap">
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                      <IconButton onClick={() => DeleteProject(project.PID)}>
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

export default PorjectLists;
