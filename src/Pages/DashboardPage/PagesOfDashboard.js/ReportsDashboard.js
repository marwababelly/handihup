import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { tableCustomStyles } from "./tableCustomStyles";
import DataTableContext from "../../../Context/context";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ReportsDashboard = () => {
  const [reportsData, setReportsData] = useState([]);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const reportData = [
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
    { id: 1, projectId: 22, userId: 14, availableItem: "true" },
    { id: 1, projectId: 22, userId: 14, availableItem: "true" },
    { id: 1, projectId: 22, userId: 14, availableItem: "false" },
  ];

  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId);
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/reports')
      .then(response => {
        setReportsData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleDeleteReport = (reportId) => {

    if (!selectedProjectId) {
      console.error("No project selected");
      return;
    }

    axios.delete(`http://127.0.0.1:8000/api/Projects/${selectedProjectId}/report/${reportId}`)
      .then(response => {
        setReportsData(reportsData.filter(report => report.id !== reportId));
      })
      .catch(error => {
        console.error(error);
      });

  };

  const handleDeleteConfirm = () => {
    handleDeleteReport(rowToDelete.id);
    setIsDeleteConfirmOpen(false);
    setRowToDelete(null);
  };

  const handleCancelDelete = () => {
    setIsDeleteConfirmOpen(false);
    setRowToDelete(null);
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "User Id",
      selector: (row) => row.userId,
    },
    {
      name: "Project Id",
      selector: (row) => row.projectId,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <button onClick={() => {
            setIsDeleteConfirmOpen(true)
            setRowToDelete(row)
          }}>Delete</button>

          {isDeleteConfirmOpen && rowToDelete?.id === row.id && (
            <div>
            <button onClick={handleDeleteConfirm}>Confirm Delete</button>
            <button onClick={handleCancelDelete}>Cancel</button>
          </div>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns}
        data={reportData}
        fixedHeader
      />
      {isDeleteConfirmOpen && (
        <div>
          Are you sure you want to delete report {rowToDelete?.id}?
          <button onClick={handleDeleteConfirm}>Confirm Delete</button>
          <button onClick={handleCancelDelete}>Cancel</button>
        </div>
      )}
    </>
  );
};

export default ReportsDashboard;
